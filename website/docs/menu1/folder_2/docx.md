---
id: Trilogix overview
title : Trilogix overview
---

### Trilogix User Creation Requests


First check AS400 for the Employee record. 

Go to AS400 > Distribution System Master Menu > 14 (System Support) > 52 (Employee Master Inquiry)

Search User’s name and remove CO in Region(see above screen shot)![](/img/trilogix/1.png)

If the user has multiple warehouses or Emp Nbr you’ll see the search result from above.After you select 5 to display the user’s record, you’re looking to locate you’ll see the following. If an SFA login is missing we’ll need RIT to assist in getting the id created, if you’re RIT please create the SFA login : 

![](/img/trilogix/2.png)

After the SFA login is created we can now go to the SFA Trilogix portal, if you don’t have access please let us know and we can assist in getting you admin access to the portal.

URL: <https://sfabunzl.crmtrilogix.com/admin/home>

![](/img/trilogix/3.png)


:::tip important
In the portal the two most important tabs are User and Salesperson for user creation requests. 
:::

### Setting Up Users – Set up Information AS400 

Employees must be listed in the Employee Master File in the 'Sales' dept (DSJOBM14 - 52).If user needs visibility to Accts outside of Default Region, outside RIT to set up Employee Master Record for user sales # in that Region.The Employee Master File Record must be in the same Region as what is set up in the tool.The Employee Master File Record must have username Login ID populated in the 'SFA LOGIN ID' field Auto generated Reports advising of AS400 updates from the tool use THIS email address
Employee Master File Record should have updated email address listed

Employee Sales # must be populated in the first or second Salesperson field on the Customer Master

OR on a Ship to...usually rep is in 1st pos on CM & SM is in 2nd pos... on Ship to, rep can go in either 1 or 2 field. (other fields past 2 do not report into the tool)

## Creating a User – Reference AS400 to match SFA login

User > Create User

Login ID: all lowercase - FIRST INITIAL OF FIRST NAME with LAST NAME - UP TO 10 CHARACTERS

George Washington = gwashingto 

Password:SAME AS USERNAME

Default CO # (2 dig) = 35

Default Location (3 dig) = 350

Login ID Description: FULL NAME OF USER

SAVE 

![](/img/trilogix/4.png)



![](/img/trilogix/5.png)

Then proceed to create the Salesperson Record (important note if the sales person number has been used prior and is not a new number you will not be allowed to create a new user):Troubleshooting: If you’re prompted the salesperson id already exist you’ll need to go to edit salesperson, sort by sales id and see if it’s already in use. If you’re unable to find the user the edit list you’ll also need to search through activate salesperson as the prior user using the id might have been deactivated in the system. 

If find, click name > overwrite info per ticket > save 

If do not find, see below Go to EDIT SALESPERSON > search x Region > then sort x Sls#

Go to Edit Salesperson > search for the name of the user (or sls# x reg) > overwrite info per ticket > save 

If find, REMEMBER NAME AND CLICK NAME and user will activate 

ACTIVATE SALESPERSON > search x Region > then sort x Sls#

Reset License

Since 8.4 this is only going to have to be done for users who are receiving loaner machines or getting new machines.  Help Desk should be aware they need to install the new 8.4 version and potentially reset the user with their Admin access into the portal.

Client Systems is supporting clearing user’s database and resetting accounts. Clearing the database and resetting a user’s account is required after any changes are made to an account. The user won’t see new warehouse access or new clients until so. We’re directing incidents and tasks to Slient Systems. 

:::tip  

RIT handles warehouse and accounts Trilogix Users access

The Ecom team only can set up users, any access is driven from the AS400

Example if the user needs SE access added to their account RIT needs to assist

Client Systems handles clearing the database and resetting users accounts 

If users need assistance logging in first please reach out to Client Systems

If users see the Registration Required

This is the user needing the database cleared and the account reset 

Client Systems assists users with this process 

Quotes, SSPs and CRMs are removed after 90 days

Reps do not need to be connected to the Bunzl network to access the tool (better if not)

When reps see Master Account in Cust list, it is because they are linked to a child

Auto-generated exception reports that receive an OOO or Invalid are sent to Internet Field

Support Mailbox...can email RIT to fix users who are no longer employees, otherwise ignore

QUOTING - Updating AS400 price file - if there is a pending price already listed, the Trilogix tool will not update the item...user will have to work internally with local branch to update manually
:::
example screenshots of user creation and add as salesperson-

![](/img/trilogix/6.png)
![](/img/trilogix/7.png)