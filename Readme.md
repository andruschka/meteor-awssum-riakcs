# awssum-riakcs for Meteor
Installs awssum, awssum-amazon and awssum-riakcs.  
Provides  ``RiakCS`` Class on the server.
More infos at <a href="https://github.com/andruschka/awssum-riakcs">awssum-riakcs</a>.

## Useage
``` coffeescript
...
riakCS = new RiakCS.S3({
  'accessKeyId'     : Meteor.settings.key_id,
  'secretAccessKey' : Meteor.settings.key_secret,
  'region'          : RiakCS.US_EAST_1
}, "your-riakcs-url.com")
  
uploadOpts = {
  BucketName : bucketName
  ObjectName : "#{prefix}#{file.name}"
  ContentLength: file.size
  ContentType: fileType
  Acl: filePermission
  Body: fs.createReadStream(file.path)
}
# Upload file synchronously
riakCS.PutObjectSync = Meteor.wrapAsync(riakCS.PutObject)  

result = riakCS.PutObjectSync uploadOpts
console.log result
...
```
