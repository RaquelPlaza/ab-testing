# ab-testing

A little program to generate different versions of a page for a/b testing purposes.

The data for the different variants is stored in a JSON object and called with an http request.

This example has 3 variants (a,b and c).

# INSTALL


Clone this project to your local disk.

Open a comand/terminal window and navigate to your local repository.

Run mpn-install in the comand line.

This application uses http-server (https://www.npmjs.com/package/http-server).

To start the server run http-server in the command line.

Go to http://127.0.0.1:8080/ in your browser.

# USAGE

The entry point for this application displays a variant which is passed as a parameter in the URL. To test the application, replace the variant value to b or c.

