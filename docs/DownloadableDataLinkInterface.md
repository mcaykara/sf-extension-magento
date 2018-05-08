# magento.DownloadableDataLinkInterface

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Sample(or link) id | [optional] 
**title** | **String** |  | [optional] 
**sortOrder** | **Number** |  | 
**isShareable** | **Number** | Shareable status | 
**price** | **Number** | Price | 
**numberOfDownloads** | **Number** | Of downloads per user | [optional] 
**linkType** | **String** |  | 
**linkFile** | **String** | relative file path | [optional] 
**linkFileContent** | [**DownloadableDataFileContentInterface**](DownloadableDataFileContentInterface.md) |  | [optional] 
**linkUrl** | **String** | Link url or null when type is &#39;file&#39; | [optional] 
**sampleType** | **String** |  | 
**sampleFile** | **String** | relative file path | [optional] 
**sampleFileContent** | [**DownloadableDataFileContentInterface**](DownloadableDataFileContentInterface.md) |  | [optional] 
**sampleUrl** | **String** | file URL | [optional] 
**extensionAttributes** | [**DownloadableDataLinkExtensionInterface**](DownloadableDataLinkExtensionInterface.md) |  | [optional] 


