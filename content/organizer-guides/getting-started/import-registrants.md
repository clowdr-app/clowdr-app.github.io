---
updatedDate: 2022-02-28T10:35:00+00:00
title: Importing your registrants
index: 0
description: Using the template spreadsheet to bulk-import your existing registrants.
author: Nate Micinski
isFeatured: false
isComprehensive: true
---

Midspace's import template enables you to use popular tools, such as Excel or
Google Sheets, to quickly bulk-enter your existing conference registrants and import
them into Midspace. This page provides the template and explanations of the column
meanings, ways to use it and how to use the options provided by Midspace's importer.

## The Template

### Overview

The template is designed to collect the required information to successfully import your conference registrants into Midspace. These consist of Name, Email, and, optionally, Group.

- **Name:** The full name of the registrant.
- **Email:** The email address of the registrant, to be used as their login.
- **Group (optional):** Groups can be useful for labelling groups of attendees (e.g., by which workshops they have registered for).
  - To make a registrant part of multiple groups, simply list them in multiple rows, one for each different group name.
  - **Top tip:** Groups must already be created in Midspace prior to import, which can be found under the Groups section of your conference Settings.

#### Data from external tools

If you have an external tool/system with existing data, it may provide a CSV,
XML or JSON export. If you are familiar with scripting languages (such as
JavaScript) you may wish to write a script to convert your existing data into
the CSV format produced from Midspace's template spreadsheet.

### Using the template

We recommend starting with creating a few test registrants in the same structure
as the template. After importing and testing that it meets your expectations, you should then move on to filling out the import template with your complete list of conference registrants.

#### Getting help

For assistance with the template, please contact our support team. The dedicated
support email address for your conference is available from the Management
Dashboard of your conference.

#### Get the template

The template is available from [Midspace's Google
Drive](https://docs.google.com/spreadsheets/d/1XtQJPts8h59LNdIsShKRLMj4QndP97aC/edit?usp=sharing&ouid=101146156947887051687&rtpof=true&sd=true).

To start using it, [_Download_ a copy](#Using-Excel) or [_Make a
Copy_](#Using-Google-Sheets) of the template. Open your copy in Google Sheets,
Excel or your preferred spreadsheet editor.

- **Top tip:** If you already downloaded or copied the [Program Importer Template](https://midspace.app/resources/organizer-guides/getting-started/import/) you do not need to duplicate this step. You will find the Registrants template as a sheet titled “Registrants” within that spreadsheet.

#### Using Excel

If you prefer to use Excel or another spreadsheet editing tool, you can download
a copy of the template here:

[Registrants Importer - Excel Download](https://docs.google.com/spreadsheets/d/1XtQJPts8h59LNdIsShKRLMj4QndP97aC/export?format=xlsx)

##### Warning: Excel and Unicode

Excel does not work in Unicode, meaning accent characters, emojis and other
unusual characters may become corrupted or lost if you copy data from other
applications or from the internet. We urge caution when using Excel to process
data that may contain special characters.

#### Using Google Sheets

If you have a Google Drive account and are logged in, you can make a copy of the
template here:

[Registrants Importer - Make a Copy](https://docs.google.com/spreadsheets/d/1XtQJPts8h59LNdIsShKRLMj4QndP97aC/copy)

## The Importer

### Preparing for import

To prepare your spreadsheet for use with Midspace's importer, you must save it
as a .CSV file (Comma-separated Values).

**Note:** We recommend the file is exported as a _comma_ separated values file. Some tools
incorrectly export CSV files separated by semicolons. The Midspace importer will
not correctly process such files by default. However, you can choose your delimiter value in the advanced Data options described below. Values which contain commas must be escaped
using double quotation marks.

#### Google Sheets

1. Open the File menu (top-left corner)
2. Open the Download submenu
3. Select "Comma-separated Values (.csv)"
4. Save the file to your computer

#### Excel

1. Open the File menu (top-left corner)
2. Open the Export submenu
3. Select "Change file type"
4. Select "CSV (Comma delimited) (\*.csv)"
5. Click "Save As"
6. Save the file to your computer

### Using the importer

The importer will walk you through the following steps to upload your list of conference registrants:

- Data
- Configure
- Review
- Import

#### Data

Drag and drop your files, or click to select files for upload.

**Advanced:** Once selected you can access advanced options from the "File format options" button including specifying your CSV delimiter, escape character, and encoding.

Pick your file from the “Select a file” dropdown to preview your data.

Click "Configure" to proceed.

#### Configure

**Advanced:** Pick your file from the "Select a file" dropdown to preview the parser script. You can edit this script directly in the on-screen editor to suit your data-structure needs. In most cases, our default script should suffice.

Click "Review" to proceed.

#### Review

Displays a final preview of your data import in JSON format.

**Advanced:** By clicking the JSONata Query Tool button you may enter a custom JSONata script to query a relevant part of your data to ensure accuracy.

Click "Import" to proceed.

#### Import

Displays a table representing your import. Information will also be provided about the number of new registrants to be imported and the number of existing registrants that will be added to more groups.

Any errors in your data such as missing names or emails will be displayed here, including the first line of offending data.

Once ready, press “Import” to complete your registrants import.

### FAQ

- **Will the registrants importer de-duplicate my data?**

  Yes! Registrants will be matched and de-duplicated by email addresses. If your import resulted in unexpected duplicate registrants, we suggest checking your list to ensure all email addresses were typed accurately.

- **Do I need to assign my registrants to a group?**

  No! Adding a group is entirely optional.

- **I’ve added groups to my registrants—why won’t the importer accept them?**

  Groups need to be created in your conference Settings prior to assigning registrants to them via the importer.

- **Can I assign registrants to more than one group?**

  Yes! To make a registrant part of multiple groups, simply list them in multiple rows, one for each different group name.

- **Will my registrants be notified by email when I add them via the importer?**

  No! Importing registrants does not cause invitation emails to be sent out (unless the Automatic Invitations feature is switched on and active in your conference Settings).
