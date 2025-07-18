
public with sharing class TestClass {
           
            @AuraEnabled(cacheable=true) 
            public static List<Account> getAccounts(){
                return [SELECT Id, Name FROM Account]; //query 
                
            }
    
}