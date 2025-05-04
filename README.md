# -*- coding: utf-8 -*-

# Fichiers pour PCIbex

## Expérience pilote d'accessibilité sur les relatives non standard.

Format demandé par PCIndex:

The GitHub repository must have one or more of the following folders in the root directory:

	- data_includes: Its contents will be copied into the Scripts folder.
	- chunk_includes: Its contents will be copied into the Resources folder.
	- js_includes: Its contents will be copied into the Controllers folder.

Example of an appropriate GitHub repository structure:

github-repository
├── README.md
├── data_includes
│   └── main.js
├── chunk_includes
│   ├── image1.png
│   └── image2.png
└── js_includes
    └── pennController.js

*Choix perso:* 
  - un seul script: mail.js dans 'data_includes'
  - ressources dans 'chunk_includes': 
	- fillers.csv
	- stimuli.csv
	- example_intro.html
