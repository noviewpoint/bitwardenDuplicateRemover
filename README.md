# bitwardenDuplicateRemover
Script for removing duplicate records from Bitwarden

# How to use

0. Clone or unzip the project to your disk.

1. In Bitwarden Web Vault, export Bitwarden data as json and save the file into the project folder.

![](https://raw.githubusercontent.com/noviewpoint/bitwardenDuplicateRemover/master/exporting%20bitwarden%20json.png)

2. Run the script using command line following the syntax below. You must have Node installed in order to run the script.

```
export bitwardenInput=[INPUT JSON] && export bitwardenOutput=[OUTPUT_JSON] && node index.js
```

![](https://raw.githubusercontent.com/noviewpoint/bitwardenDuplicateRemover/master/running%20the%20script.png)

3. In Bitwarden Web Vault, delete your previous data (remember, you still have a backup in case something goes wrong @ step 1.) and import the new deduplicated json file.

![](https://raw.githubusercontent.com/noviewpoint/bitwardenDuplicateRemover/master/importing%20deduplicated%20bitwarden%20json.png)

4. After the import is complete, go to your Bitwarden application (browser extension or standalone) and press "Sync Vault Now". This ensures that the application is synced with the new data.

5. In case that Bitwarden Web Vault does not display the newly imported data after the import, you must first sync the application (@ step 5.) and then visit the Bitwarden Web Vault by clicking the "Bitwarden Web Vault" button in the application.

6. OPTIONAL
If the script prints any "Possible duplicate..." statements there were some ambivalent records that the script could not deduplicate automatically. These items must be deduplicated by hand using Bitwarden Web Vault.
