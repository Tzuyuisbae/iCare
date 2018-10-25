var mysql = require('mysql');

function exec_SQL(cmd) {

    var con = mysql.createConnection({
        host: "den1.mysql6.gear.host",
        user: "icare",
        password: "team9!",
        database: "icare"
    });
    
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        con.query(cmd, function (err, result) {
          if (err) throw err;
          console.log("Database created");
        });
    });

    console.log("succeesssssssssssssssssssssssssssss")
}

function create_table(name, headers) {
    var sql = "CREATE TABLE " + name + " (" + headers + ");"; 
    exec_SQL(sql);
}

/*
create_table("client", 
    " `Processing Details` VARCHAR(255)," + 
    " `Unique Identifier` VARCHAR(255)," + 
    " `Unique Identifier Value` INT," + 
    " `Date of Birth (YYYY-MM-DD)` Date(255)," + 
    " `Phone Number` VARCHAR(255)," + 
    " `Does the Client Have an Email Address` VARCHAR(255)," + 
    " `Email Address` VARCHAR(255)," + 
    " `Street Number` INT," + 
    " `Street Name` VARCHAR(255)," + 
    " `Street Type` VARCHAR(255)," + 
    " `Street Direction` VARCHAR(255)," + 
    " `Unit/Suite/Apt` INT," + 
    " `City` VARCHAR(255)," + 
    " `Province` VARCHAR(255)," + 
    " `Postal Code` VARCHAR(255)," + 
    " `Official Language of Preference` VARCHAR(255)," + 
    " `Consent for Future Research/Consultation` VARCHAR(255)," +
    " PRIMARY KEY (`Unique Identifier`, `Unique Identifier Value`)");

// create rest of the tables later
create_table("organization",
    " Name VARCHAR(255)," +
    " id INT AUTO_INCREMENT PRIMARY KEY");

// create user accounts

create_table("accounts",
    " Name VARCHAR(255)," +
    " Email VARCHAR(255)," +
    "id INT AUTO_INCREMENT PRIMARY KEY," +
    "permissions INT");

*/

// TODO: shorten the column headers

create_table("`Needs Assessment`",
" `Processing Details` VARCHAR(255)," + 
" `Update Record ID` INT," + 
" `Unique Identifier` VARCHAR(255)," + 
" `Unique Identifier Value` INT," + 
" `Date of Birth (YYYY-MM-DD)` DATE," + 
" `Postal Code where the service was received` VARCHAR(255)," + 
" `Start Date of Assessment (YYYY-MM-DD)` DATE," + 
" `Language of Service` VARCHAR(255)," + 
" `Official Language of Preference` VARCHAR(255)," + 
" `Type of Institution/Organization Where Client Received Services` VARCHAR(255)," + 
" `Referred By` VARCHAR(255)," + 
" `Increase knowledge of: Life in Canada` VARCHAR(255)," + 
" `Increase knowledge of: Life in Canada Referrals` VARCHAR(255)," + 
" `Increase knowledge of: Community and Government Services` VARCHAR(255)," + 
" `Increase knowledge of: Community and Government Services Referrals` VARCHAR(255)," + 
" `Increase knowledge of: Working in Canada` VARCHAR(255)," + 
" `Increase knowledge of: Working in Canada Referrals` VARCHAR(255)," + 
" `Increase knowledge of: Education in Canada` VARCHAR(255)," + 
" `Increase knowledge of: Education in Canada Referrals` VARCHAR(255)," + 
" `Increase the following: Social networks` VARCHAR(255)," + 
" `Increase the following: Social networks Referrals` VARCHAR(255)," + 
" `Increase the following: Professional networks` VARCHAR(255)," + 
" `Increase the following: Professional networks Referrals` VARCHAR(255)," + 
" `Increase the following: Access to local community services` VARCHAR(255)," + 
" `Increase the following: Access to local community services Referrals` VARCHAR(255)," + 
" `Increase the following: Level of community involvement` VARCHAR(255)," + 
" `Increase the following: Level of community involvement Referrals` VARCHAR(255)," + 
" `Improve Language Skills` VARCHAR(255)," + 
" `Improve Language Skills Referrals` VARCHAR(255)," + 
" `Improve Language Skills to` VARCHAR(255)," + 
" `Improve Other Skills` VARCHAR(255)," + 
" `Improve Other Skills Referrals` VARCHAR(255)," + 
" `Improve Other Skills to` VARCHAR(255)," + 
" `Find employment` VARCHAR(255)," + 
" `Find employment Referrals` VARCHAR(255)," + 
" `Find employment: TimeFrame` VARCHAR(255)," + 
" `Find employment: Minimum one year's work experience?` VARCHAR(255)," + 
" `Find employment: Intends to work in an occupation corresponding to which National Occupation Classification skill level?` VARCHAR(255)," + 
" `Find employment: Intends to obtain credential recognition or obtain license to work in Canada?` VARCHAR(255)," + 
" `Client intends to become a Canadian citizen?` VARCHAR(255)," + 
" `Support services may be required` VARCHAR(255)," + 
" `Care for Newcomer Children` VARCHAR(255)," + 
" `Transportation` VARCHAR(255)," + 
" `Provisions for Disabilities` VARCHAR(255)," + 
" `Translation` VARCHAR(255)," + 
" `Interpretation` VARCHAR(255)," + 
" `Crisis Counselling` VARCHAR(255)," + 
" `Non-IRCC program services needed` VARCHAR(255)," + 
" `Food/Clothing/Other Material Needs` VARCHAR(255)," + 
" `Food/Clothing/Other Material Needs Referrals` VARCHAR(255)," + 
" `Housing/Accommodation` VARCHAR(255)," + 
" `Housing/Accommodation Referrals` VARCHAR(255)," + 
" `Health/Mental Health/Well Being` VARCHAR(255)," + 
" `Health/Mental Health/Well Being Referrals` VARCHAR(255)," + 
" `Financial` VARCHAR(255)," + 
" `Financial Referrals` VARCHAR(255)," + 
" `Family Support` VARCHAR(255)," + 
" `Family Support Referrals` VARCHAR(255)," + 
" `Language (Non-IRCC)` VARCHAR(255)," + 
" `Language (Non-IRCC) Referrals` VARCHAR(255)," + 
" `Education/Skills Development` VARCHAR(255)," + 
" `Education/Skills Development Referrals` VARCHAR(255)," + 
" `Employment-related` VARCHAR(255)," + 
" `Employment-related Referrals` VARCHAR(255)," + 
" `Legal Information and Services` VARCHAR(255)," + 
" `Legal Information and Services Referrals` VARCHAR(255)," + 
" `Community Services` VARCHAR(255)," + 
" `Community Services Referrals` VARCHAR(255)," + 
" `Support Services Received` VARCHAR(255)," + 
" `Care for Newcomer Children` VARCHAR(255)," + 
" `Child 1: Age` VARCHAR(255)," + 
" `Child 1: Type of Care` VARCHAR(255)," + 
" `Child 2: Age` VARCHAR(255)," + 
" `Child 2: Type of Care` VARCHAR(255)," + 
" `Child 3: Age` VARCHAR(255)," + 
" `Child 3: Type of Care` VARCHAR(255)," + 
" `Child 4: Age` VARCHAR(255)," + 
" `Child 4: Type of Care` VARCHAR(255)," + 
" `Child 5: Age` VARCHAR(255)," + 
" `Child 5: Type of Care` VARCHAR(255)," + 
" `Transportation` VARCHAR(255)," + 
" `Provisions for Disabilities` VARCHAR(255)," + 
" `Translation` VARCHAR(255)," + 
" `Between` VARCHAR(255)," + 
" `And` VARCHAR(255)," + 
" `Interpretation` VARCHAR(255)," + 
" `Between` VARCHAR(255)," + 
" `And` VARCHAR(255)," + 
" `Crisis Counselling` VARCHAR(255)," + 
" `Settlement Plan completed and shared with client` VARCHAR(255)," + 
" `End Date of Assessment (YYYY-MM-DD)` DATE," + 
" `Reason for update` VARCHAR(255)," +
" FOREIGN KEY `Unique Identifier` REFERENCES client(`Unique Identifier`)," +
" FOREIGN KEY `Unique Identifier Value` REFERENCES client(`Unique Identifier Value`),"+
" FOREIGN KEY `Date of Birth (YYYY-MM-DD)` REFERENCES client(`Date of Birth (YYYY-MM-DD)`)," +
" PRIMARY KEY(`Unique Identifier`, `Unique Identifier Value`, `Update Record ID`)");
