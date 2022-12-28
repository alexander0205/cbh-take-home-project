# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
  1. **Ticket 1:Update database schema.**
	 2. **Acceptance Criteria:**
		 3. The Agents table has a new column called: "customer_id" which allows Facilites to save their own id for each agent.
		 4. The custom_id column is nullable
	 3. **Time/Effort Estimate:**
		 4. Low-Medium. This will involve altering the existing table and adding a new column. There may be same testing and debugging required to ensure the rest of the system is not affected by this change.
	 4. **Implement details**:
		 5. Use SQL to alter the existing Agents table and add the custom_id column 
		 6. Test the database to ensure the custom_id column is functional and that the rest of the system is not affected by the change.
 2. **Ticket 2: Update getShiftsByFacility function**
	 3. **Acceptance Criteria**:
		 4. The getShiftsByFacility function now returns the custom_id for each Agent, if it is set. If it is not set, it should return the internal database id.  
		 5.  The output of the function remains in the same format as before, with the custom_id being added to the metadata for each Shift
	 4. **Time/Effort Estimate:**
		 5. Low-Medium. This will involve modifying the existing function to retrieve and return the custom_id for each Agent. Some testing and debugging may be required to ensure that the function is working correctly.  
	 5. **Implementation Details:**
		 6. Modify the getShiftsByFacility function to retrieve and return the custom_id for each Agent
		 7. Test the function to ensure that it is returning the correct id for each Agent, and that the output is in the expected format
 3. **Ticket 3: Update generateReport function**
	 4. **Acceptance Criteria** 
		 5. The generateReport function now uses the custom_id for each Agent, if it is set. If it is not set, it should use the internal database id.  
		 6.  The generated report is in the same format as before, with the custom_id being used for each Agent instead of the internal database id.  
	 5. **Time/Effort Estimate:**  
		 6.  Low-Medium. This will involve modifying the existing function to use the custom_id for each Agent if it is set, and falling back to the internal database id if it is not. Some testing and debugging may be required to ensure that the function is working correctly.  
	 6.  **Implementation Details:**  
		 8.  Modify the generateReport function to use the custom_id for each Agent if it is set, and falling back to the internal database id if it is not  
		 9.  Test the function to ensure that it is using the correct id for each Agent, and that the generated report is in the expected format
 4. **Ticket 4: Update user interface**
	 5. **Acceptance Criteria:**
		 6. The facilities can now enter their own custom id for each Agent when adding them to the platform 
		 7. The Facilities can view and edit the custom id for each Agent through the user interface
	 6. **Time/Effort Estimate:**  
		 7. Medium. This will involve updating the user interface to allow Facilities to enter and edit the custom id for each Agent. Some testing and debugging may be required to ensure that the user interface is functioning correctly.  
	 7. **Implementation Details:**  
		 8. Update the user interface to allow Facilities to enter and edit the custom id for each Agent
		 9. Test the user interface to ensure that the custom id can be entered and edited correctly, and that the changes are reflected in the database
	 8. **Ticket 5: Testing**
		 9. **Acceptance Criteria**
			 10. Before go the changes to STAGE or Production we need use the testing .
		 10. Time/Effort Estimate
			 11. Medium. This will involve pass the default unit testing . Some testing and debugging may be required to ensure that the user interface is functioning correctly.
		 11. Implementation Details
			 12. Run the unit testing and be sure all is working perfectly 
