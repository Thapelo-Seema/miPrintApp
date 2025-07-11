public with sharing class TestClass {
    public TestClass() {
            public void getAccounts(){
                List<Account> accounts = [SELECT Id, Name FROM Account WHERE Name LIKE 'A%']; //query 
                accounts[0].Name = accounts[0].Name + 'Checked';
                upsert accounts[0]; //DML 
            }
    }
}