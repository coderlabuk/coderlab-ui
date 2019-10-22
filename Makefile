
include .env
export

upload-to-s3:
	aws s3 cp ./dist $(S3_BUCKET)

