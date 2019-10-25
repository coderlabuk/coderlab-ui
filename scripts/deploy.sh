#!/bin/bash
set -eo pipefail

if [ -z "$S3_BUCKET" ]
then
      echo "Error: \$S3_BUCKET env var is empty"
      exit 1
else
      echo "Deploying code to $S3_BUCKET"
fi

LANDING_TIMESTAMP="$(date +'%Y-%m-%d_%H-%M-%S')"
LINEAGE_BUCKET="s3://$S3_BUCKET/lineage/landing_timestamp=$LANDING_TIMESTAMP"
PROD_BUCKET="s3://$S3_BUCKET/prod"

aws s3 sync $PROD_BUCKET $LINEAGE_BUCKET
aws s3 rm --recursive $PROD_BUCKET
aws s3 sync ./dist $PROD_BUCKET

if [ -z "$CDN_DISTRIBUTION_ID" ]
then
      echo "Cannot invalidate cache: \$CDN_DISTRIBUTION_ID env var is empty"
      exit 0
else
      echo "Deploying code to $CDN_DISTRIBUTION_ID"
fi

aws cloudfront create-invalidation --distribution-id $CDN_DISTRIBUTION_ID --paths "/prod/*"

