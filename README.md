# bitwardenDuplicateRemover
Script for removing duplicate records from Bitwarden

# How to use

0. Clone or unzip the project to your disk.

1. Export Bitwarden data as json and save the file into the project folder.

![Exporting Bitwarden records as json using the Bitwarden Web Vault](https://raw.githubusercontent.com/noviewpoint/bitwardenDuplicateRemover/master/exporting%20bitwarden%20json.png)

2. Run the script using syntax:

export bitwardenInput=[INPUT JSON] && export bitwardenOutput=[OUTPUT_JSON] && node index.js

![Running the script (MUST HAVE NODE INSTALLED!)]("/running the script.png")

3. Import the deduplicated json file to Bitwarden.

![Running the script (MUST HAVE NODE INSTALLED!)]("/importing deduplicated bitwarden json.png")
