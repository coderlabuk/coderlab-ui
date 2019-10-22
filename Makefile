
include .env
export

.PHONY: aws-cp-prod-to-lineage

aws-cp-prod-to-lineage:
    LT=$(date +%s") echo "yo$(LT)"
	# aws s3 sync s3://$(S3_BUCKET)/prod s3://$(S3_BUCKET)/lineage/landing_timestamp=$(date +%s)

upload-to-s3:
	aws s3 cp ./dist $(S3_BUCKET)

