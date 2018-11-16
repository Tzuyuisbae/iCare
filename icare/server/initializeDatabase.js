var mysql = require('mysql');


function create_table(name, headers) {
    var sql = "CREATE TABLE " + name + " (" + headers + ");"; 

    console.log(sql);

    var con = mysql.createConnection({
        host: "den1.mysql6.gear.host",
        user: "icare",
        password: "team9!",
        database: "icare"
    });
    
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Database created");
        });
        con.end();
    });

}

module.exports.create_table = create_table;
/*
// create user accounts

create_table("accounts",
    " Name VARCHAR(255)," +
    " Email VARCHAR(255)," +
    " Password VARCHAR(255)," +
    " id INT AUTO_INCREMENT PRIMARY KEY," +
    " organization INT,"+
    " permissions INT," +
    " FOREIGN KEY (organization) references organization(Name)");


create_table("organization",
    " Name VARCHAR(255) PRIMARY KEY
    */
// TODO: shorten the column headers

create_table("client", 
    " `MONTH` ENUM ('JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC')," +
    " `YEAR` INT," +
    " `Processing Details` VARCHAR(255)," + 
    " `Unique Identifier` VARCHAR(255)," + 
    " `Unique Identifier Value` INT," + 
    " `Date of Birth (YYYY-MM-DD)` DATE," + 
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
/*
create_table("`needs assessment`",
" `MONTH` ENUM ('JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC')," +
" `YEAR` INT," +
" `Processing Details` VARCHAR(255)," + 
" `Update Record ID` INT," + 
" `Unique Identifier` VARCHAR(255)," + 
" `Unique Identifier Value` INT," + 
" `Date of Birth (YYYY-MM-DD)` DATE," + 
" `Postal Code where the service was received` VARCHAR(60)," + 
" `Start Date of Assessment (YYYY-MM-DD)` DATE," + 
" `Language of Service` VARCHAR(60)," + 
" `Official Language of Preference` VARCHAR(60)," + 
" `Type of Institution/Organization Where Client Received Services` VARCHAR(60)," + 
" `Referred By` VARCHAR(60)," + 
" `IKO: Life in Canada` ENUM(\"Yes\", \"No\", \"\")," + 
" `IKO: Life in Canada Referrals` ENUM(\"Yes\", \"No\", \"\")," + 
" `IKO: Community and Government Services` ENUM(\"Yes\", \"No\", \"\")," + 
" `IKO: Community and Government Services Referrals` ENUM(\"Yes\", \"No\", \"\")," + 
" `IKO: Working in Canada` ENUM(\"Yes\", \"No\", \"\")," + 
" `IKO: Working in Canada Referrals` ENUM(\"Yes\", \"No\", \"\")," + 
" `IKO: Education in Canada` ENUM(\"Yes\", \"No\", \"\")," + 
" `IKO: Education in Canada Referrals` ENUM(\"Yes\", \"No\", \"\")," + 
" `ITF: Social networks` ENUM(\"Yes\", \"No\", \"\")," + 
" `ITF: Social networks Referrals` ENUM(\"Yes\", \"No\", \"\")," + 
" `ITF: Professional networks` ENUM(\"Yes\", \"No\", \"\")," + 
" `ITF: Professional networks Referrals` ENUM(\"Yes\", \"No\", \"\")," + 
" `ITF: Access to local community services` ENUM(\"Yes\", \"No\", \"\")," + 
" `ITF: Access to local community services Referrals` ENUM(\"Yes\", \"No\", \"\")," + 
" `ITF: Level of community involvement` ENUM(\"Yes\", \"No\", \"\")," + 
" `ITF: Level of community involvement Referrals` ENUM(\"Yes\", \"No\", \"\")," + 
" `Improve Language Skills` ENUM(\"Yes\", \"No\", \"\")," + 
" `Improve Language Skills Referrals` ENUM(\"Yes\", \"No\", \"\")," + 
" `Improve Language Skills to` VARCHAR(60)," + 
" `Improve Other Skills` ENUM(\"Yes\", \"No\", \"\")," + 
" `Improve Other Skills Referrals` ENUM(\"Yes\", \"No\", \"\")," + 
" `Improve Other Skills to` VARCHAR(60)," + 
" `Find employment` ENUM(\"Yes\", \"No\", \"\")," + 
" `Find employment Referrals` ENUM(\"Yes\", \"No\", \"\")," + 
" `Find employment: TimeFrame` VARCHAR(60)," + 
" `Find employment: Minimum one year's work experience?` ENUM(\"Yes\", \"No\", \"\")," + 
" `Find employment: which NOC skill level?` VARCHAR(60)," + 
" `Find employment: Intends to obtain license to work in Canada?` ENUM(\"Yes\", \"No\", \"\")," + 
" `Client intends to become a Canadian citizen?` ENUM(\"Yes\", \"No\", \"\")," + 
" `Support services may be required` ENUM(\"Yes\", \"No\", \"\")," + 
" `Care for Newcomer Children Recieved?` ENUM(\"Yes\", \"No\", \"\")," + 
" `Transportation` ENUM(\"Yes\", \"No\", \"\")," + 
" `Provisions for Disabilities` ENUM(\"Yes\", \"No\", \"\")," + 
" `Translation` ENUM(\"Yes\", \"No\", \"\")," + 
" `Interpretation` ENUM(\"Yes\", \"No\", \"\")," + 
" `Crisis Counselling` ENUM(\"Yes\", \"No\", \"\")," + 
" `Non-IRCC program services needed` ENUM(\"Yes\", \"No\", \"\")," + 
" `Food/Clothing/Other Material Needs` ENUM(\"Yes\", \"No\", \"\")," + 
" `Food/Clothing/Other Material Needs Referrals` ENUM(\"Yes\", \"No\", \"\")," + 
" `Housing/Accommodation` ENUM(\"Yes\", \"No\", \"\")," + 
" `Housing/Accommodation Referrals` ENUM(\"Yes\", \"No\", \"\")," + 
" `Health/Mental Health/Well Being` ENUM(\"Yes\", \"No\", \"\")," + 
" `Health/Mental Health/Well Being Referrals` ENUM(\"Yes\", \"No\", \"\")," + 
" `Financial` ENUM(\"Yes\", \"No\", \"\")," + 
" `Financial Referrals` ENUM(\"Yes\", \"No\", \"\")," + 
" `Family Support` ENUM(\"Yes\", \"No\", \"\")," + 
" `Family Support Referrals` ENUM(\"Yes\", \"No\", \"\")," + 
" `Language (Non-IRCC)` ENUM(\"Yes\", \"No\", \"\")," + 
" `Language (Non-IRCC) Referrals` ENUM(\"Yes\", \"No\", \"\")," + 
" `Education/Skills Development` ENUM(\"Yes\", \"No\", \"\")," + 
" `Education/Skills Development Referrals` ENUM(\"Yes\", \"No\", \"\")," + 
" `Employment-related` ENUM(\"Yes\", \"No\", \"\")," + 
" `Employment-related Referrals` ENUM(\"Yes\", \"No\", \"\")," + 
" `Legal Information and Services` ENUM(\"Yes\", \"No\", \"\")," + 
" `Legal Information and Services Referrals` ENUM(\"Yes\", \"No\", \"\")," + 
" `Community Services` ENUM(\"Yes\", \"No\", \"\")," + 
" `Community Services Referrals` ENUM(\"Yes\", \"No\", \"\")," + 
" `Support Services Received` ENUM(\"Yes\", \"No\", \"\")," + 
" `Care for Newcomer Children` ENUM(\"Yes\", \"No\", \"\")," + 
" `Child 1: Age` VARCHAR(60)," + 
" `Child 1: Type of Care` VARCHAR(60)," + 
" `Child 2: Age` VARCHAR(60)," + 
" `Child 2: Type of Care` VARCHAR(60)," + 
" `Child 3: Age` VARCHAR(60)," + 
" `Child 3: Type of Care` VARCHAR(60)," + 
" `Child 4: Age` VARCHAR(60)," + 
" `Child 4: Type of Care` VARCHAR(60)," + 
" `Child 5: Age` VARCHAR(60)," + 
" `Child 5: Type of Care` VARCHAR(60)," + 
" `Transportation Recieved?` ENUM(\"Yes\", \"No\", \"\")," + 
" `Provisions for Disabilities Recieved?` ENUM(\"Yes\", \"No\", \"\")," + 
" `Translation?` ENUM(\"Yes\", \"No\", \"\")," + 
" `Translation language Between` VARCHAR(60)," + 
" `Translation language And` VARCHAR(60)," + 
" `Interpretation?` ENUM(\"Yes\", \"No\", \"\")," + 
" `Interpretation language Between` VARCHAR(60)," + 
" `Interpretation language And` VARCHAR(60)," + 
" `Crisis Counselling Recieved?` ENUM(\"Yes\", \"No\", \"\")," + 
" `Settlement Plan completed and shared with client` ENUM(\"Yes\", \"No\", \"\")," + 
" `End Date of Assessment (YYYY-MM-DD)` DATE," + 
" `Reason for update` VARCHAR(60)," +
"PRIMARY KEY(`Unique Identifier`, `Unique Identifier Value`, `Update Record ID`, `MONTH`, `YEAR`)");

create_table('community', 
" `MONTH` ENUM ('JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC')," +
" `YEAR` INT," +
" `Processing Details` VARCHAR(255)," + 
" `Update Record ID` INT," + 
" `Unique Identifier` VARCHAR(255)," + 
" `Unique Identifier Value` INT," + 
" `Date of Birth (YYYY-MM-DD)` DATE," + 
" `Postal Code where the service was received` VARCHAR(60)," + 
" `Language of Service` VARCHAR(60)," + 
" `Official Language of Preference` VARCHAR(60)," + 
" `Referred By` VARCHAR(60)," + 
" `Activity Under Which Client Received Services` VARCHAR(60)," + 
" `Type of Organization Where Client Received Services` VARCHAR(60)," + 
" `Type of Event Attended` VARCHAR(60)," + 
" `Type of Service` VARCHAR(60)," + 
" `Main Topic/Focus of the Service Received` VARCHAR(60)," + 
" `Service Received` VARCHAR(255)," + 
" `Number of Unique Participants` VARCHAR(60)," + 
" `Did Host Community Volunteers Participate in the Activity` ENUM(\"Yes\", \"No\", \"\")," + 
" `Directed at a Specific Target Group` ENUM(\"Yes\", \"No\", \"\")," + 
" `Target Group: Children (0-14 yrs)` ENUM(\"Yes\", \"No\", \"\")," + 
" `Target Group: Youth (15-24 yrs)` ENUM(\"Yes\", \"No\", \"\")," + 
" `Target Group: Senior` ENUM(\"Yes\", \"No\", \"\")," + 
" `Target Group: Gender-specific` ENUM(\"Yes\", \"No\", \"\")," + 
" `Target Group: Refugees` ENUM(\"Yes\", \"No\", \"\")," + 
" `Target Group: Ethnic/cultural/linguistic group` ENUM(\"Yes\", \"No\", \"\")," + 
" `Target Group: Deaf or Hard of Hearing` ENUM(\"Yes\", \"No\", \"\")," + 
" `Target Group: Blind or Partially Sighted` ENUM(\"Yes\", \"No\", \"\")," + 
" `Target Group: Lesbian, Gay, Bisexual, Transgender, Queer (LGBTQ)` ENUM(\"Yes\", \"No\", \"\")," + 
" `Target Group: Families/Parents` ENUM(\"Yes\", \"No\", \"\")," + 
" `Target Group: Other impairments (physical, mental)` ENUM(\"Yes\", \"No\", \"\")," + 
" `Target Group: Clients with training in regulated profession` ENUM(\"Yes\", \"No\", \"\")," + 
" `Target Group: Clients with training in a regulated trade` ENUM(\"Yes\", \"No\", \"\")," + 
" `Target Group: Official language minorities` ENUM(\"Yes\", \"No\", \"\")," + 
" `Status of Service` VARCHAR(60)," + 
" `Reason for Leaving Service` VARCHAR(60)," + 
" `Start Date (YYYY-MM-DD)` DATE," + 
" `End Date (YYYY-MM-DD)` DATE," + 
" `Projected End Date (YYYY-MM-DD)` DATE," + 
" `Was Essential Skills and Aptitudes Training Received?` ENUM(\"Yes\", \"No\", \"\")," + 
" `Computer Skills` ENUM(\"Yes\", \"No\", \"\")," + 
" `Document Use` ENUM(\"Yes\", \"No\", \"\")," + 
" `Interpersonal Skills and Workplace Culture` ENUM(\"Yes\", \"No\", \"\")," + 
" `Leadership Training` ENUM(\"Yes\", \"No\", \"\")," + 
" `Life Skills` ENUM(\"Yes\", \"No\", \"\")," + 
" `Numeracy` ENUM(\"Yes\", \"No\", \"\")," + 
" `Support Services Received` ENUM(\"Yes\", \"No\", \"\")," + 
" `Care for Newcomer Children` ENUM(\"Yes\", \"No\", \"\")," + 
" `Child 1: Age` VARCHAR(60)," + 
" `Child 1: Type of Care` VARCHAR(60)," + 
" `Child 2: Age` VARCHAR(60)," + 
" `Child 2: Type of Care` VARCHAR(60)," + 
" `Child 3: Age` VARCHAR(60)," + 
" `Child 3: Type of Care` VARCHAR(60)," + 
" `Child 4: Age` VARCHAR(60)," + 
" `Child 4: Type of Care` VARCHAR(60)," + 
" `Child 5: Age` VARCHAR(60)," + 
" `Child 5: Type of Care` VARCHAR(60)," + 
" `Transportation` ENUM(\"Yes\", \"No\", \"\")," + 
" `Provisions for Disabilities` ENUM(\"Yes\", \"No\", \"\")," + 
" `Translation?` ENUM(\"Yes\", \"No\", \"\")," + 
" `Translation language Between` VARCHAR(60)," + 
" `Translation language And` VARCHAR(60)," + 
" `Interpretation?` ENUM(\"Yes\", \"No\", \"\")," + 
" `Interpretation language Between` VARCHAR(60)," + 
" `Interpretation language And` VARCHAR(60)," + 
" `Crisis Counselling` ENUM(\"Yes\", \"No\", \"\")," + 
" `Total Length of Service: Hours` INT," + 
" `Total Length of Service: Minutes` INT," + 
" `Reason for update` VARCHAR(60)," +
" PRIMARY KEY(`Unique Identifier`, `Unique Identifier Value`, `Update Record ID`, `MONTH`, `YEAR`)");



create_table('infoorient', 
" `MONTH` ENUM ('JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC')," +
" `YEAR` INT," +
" `Processing Details` VARCHAR(255)," + 
" `Update Record ID` INT," + 
" `Unique Identifier` VARCHAR(255)," + 
" `Unique Identifier Value` INT," + 
" `Date of Birth (YYYY-MM-DD)` DATE," + 
" `Postal Code where the service was received` VARCHAR(60)," + 
" `Start Date of Service (YYYY-MM-DD)` DATE," + 
" `Language of Service` VARCHAR(60)," + 
" `Official Language of Preference` VARCHAR(60)," + 
" `Type of Institution Where Client Received Services` VARCHAR(60)," + 
" `Referred By` VARCHAR(60)," + 
" `Services Received` VARCHAR(60)," + 
" `Total Length of Orientation` VARCHAR(60)," + 
" `Total Length of Orientation: Hours` INT," + 
" `Total Length of Orientation: Minutes` INT," + 
" `Number of Clients in Group` VARCHAR(60)," + 
" `Directed at a specific Target Group` ENUM(\"Yes\", \"No\", \"\")," + 
" `Target Group: Children (0-14 yrs)` ENUM(\"Yes\", \"No\", \"\")," + 
" `Target Group: Youth (15-24 yrs)` ENUM(\"Yes\", \"No\", \"\")," + 
" `Target Group: Seniors` ENUM(\"Yes\", \"No\", \"\")," + 
" `Target Group: Gender-specific` ENUM(\"Yes\", \"No\", \"\")," + 
" `Target Group: Refugees` ENUM(\"Yes\", \"No\", \"\")," + 
" `Target Group: Ethnic/cultural/linguistic group` ENUM(\"Yes\", \"No\", \"\")," + 
" `Target Group: Deaf or Hard of Hearing` ENUM(\"Yes\", \"No\", \"\")," + 
" `Target Group: Blind or Partially Sighted` ENUM(\"Yes\", \"No\", \"\")," + 
" `Target Group: (LGBTQ)` ENUM(\"Yes\", \"No\", \"\")," + 
" `Target Group: Families/Parents` ENUM(\"Yes\", \"No\", \"\")," + 
" `Target Group: Clients with other impairments` ENUM(\"Yes\", \"No\", \"\")," + 
" `Target Group: Clients with training in a regulated profession` ENUM(\"Yes\", \"No\", \"\")," + 
" `Target Group: Clients with training in a regulated trade` ENUM(\"Yes\", \"No\", \"\")," + 
" `Target Group: Official Language minorities` ENUM(\"Yes\", \"No\", \"\")," + 
" `Overview of Canada` ENUM(\"Yes\", \"No\", \"\")," + 
" `Overview of Canada Referrals` ENUM(\"Yes\", \"No\", \"\")," + 
" `Sources of Information` ENUM(\"Yes\", \"No\", \"\")," + 
" `Sources of Information Referrals` ENUM(\"Yes\", \"No\", \"\")," + 
" `Rights and Freedoms` ENUM(\"Yes\", \"No\", \"\")," + 
" `Rights and Freedoms Referrals` ENUM(\"Yes\", \"No\", \"\")," + 
" `Canadian Law and Justice` ENUM(\"Yes\", \"No\", \"\")," + 
" `Canadian Law and Justice Referrals` ENUM(\"Yes\", \"No\", \"\")," + 
" `Important Documents` ENUM(\"Yes\", \"No\", \"\")," + 
" `Important Documents Referrals` ENUM(\"Yes\", \"No\", \"\")," + 
" `Improving English or French` ENUM(\"Yes\", \"No\", \"\")," + 
" `Improving English or French Referrals` ENUM(\"Yes\", \"No\", \"\")," + 
" `Employment and Income` ENUM(\"Yes\", \"No\", \"\")," + 
" `Employment and Income Referrals` ENUM(\"Yes\", \"No\", \"\")," + 
" `Education` ENUM(\"Yes\", \"No\", \"\")," + 
" `Education Referrals` ENUM(\"Yes\", \"No\", \"\")," + 
" `Housing` ENUM(\"Yes\", \"No\", \"\")," + 
" `Housing Referrals` ENUM(\"Yes\", \"No\", \"\")," + 
" `Health` ENUM(\"Yes\", \"No\", \"\")," + 
" `Health Referrals` ENUM(\"Yes\", \"No\", \"\")," + 
" `Money and Finances` ENUM(\"Yes\", \"No\", \"\")," + 
" `Money and Finances Referrals` ENUM(\"Yes\", \"No\", \"\")," + 
" `Transportation` ENUM(\"Yes\", \"No\", \"\")," + 
" `Transportation Referrals` ENUM(\"Yes\", \"No\", \"\")," + 
" `Communications and Media` ENUM(\"Yes\", \"No\", \"\")," + 
" `Communications and Media Referrals` ENUM(\"Yes\", \"No\", \"\")," + 
" `Community Engagement` ENUM(\"Yes\", \"No\", \"\")," + 
" `Community Engagement Referrals` ENUM(\"Yes\", \"No\", \"\")," + 
" `Becoming a Canadian Citizen` ENUM(\"Yes\", \"No\", \"\")," + 
" `Becoming a Canadian Citizen Referrals` ENUM(\"Yes\", \"No\", \"\")," + 
" `Interpersonal Conflict` ENUM(\"Yes\", \"No\", \"\")," + 
" `Interpersonal Conflict Referrals` ENUM(\"Yes\", \"No\", \"\")," + 
" `Was Essential Skills Training Received as Part of this Service?` ENUM(\"Yes\", \"No\", \"\")," + 
" `Computer skills` ENUM(\"Yes\", \"No\", \"\")," + 
" `Document Use` ENUM(\"Yes\", \"No\", \"\")," + 
" `Interpersonal Skills and Workplace Culture` ENUM(\"Yes\", \"No\", \"\")," + 
" `Leadership Training` ENUM(\"Yes\", \"No\", \"\")," + 
" `Numeracy` ENUM(\"Yes\", \"No\", \"\")," + 
" `Was Life Skills or Responsibilities of Citizen Info Received` ENUM(\"Yes\", \"No\", \"\")," + 
" `Life Skills` ENUM(\"Yes\", \"No\", \"\")," + 
" `Rights and Responsibilities of Citizenship (discover Canada)` ENUM(\"Yes\", \"No\", \"\")," + 
" `Support Services Received` ENUM(\"Yes\", \"No\", \"\")," + 
" `Care for Newcomer Children` ENUM(\"Yes\", \"No\", \"\")," + 
" `Child 1: Age` VARCHAR(60)," + 
" `Child 1: Type of Care` VARCHAR(60)," + 
" `Child 2: Age` VARCHAR(60)," + 
" `Child 2: Type of Care` VARCHAR(60)," + 
" `Child 3: Age` VARCHAR(60)," + 
" `Child 3: Type of Care` VARCHAR(60)," + 
" `Child 4: Age` VARCHAR(60)," + 
" `Child 4: Type of Care` VARCHAR(60)," + 
" `Child 5: Age` VARCHAR(60)," + 
" `Child 5: Type of Care` VARCHAR(60)," + 
" `Transportation Recieved?` ENUM(\"Yes\", \"No\", \"\")," + 
" `Provisions for Disabilities` ENUM(\"Yes\", \"No\", \"\")," + 
" `Translation?` ENUM(\"Yes\", \"No\", \"\")," + 
" `Translation language Between` VARCHAR(60)," + 
" `Translation language And` VARCHAR(60)," + 
" `Interpretation?` ENUM(\"Yes\", \"No\", \"\")," + 
" `Interpretation language Between` VARCHAR(60)," + 
" `Interpretation language And` VARCHAR(60)," + 
" `Crisis Counselling` ENUM(\"Yes\", \"No\", \"\")," + 
" `End Date of Service (YYYY-MM-DD)` DATE," + 
" `Reason for update` VARCHAR(60)," +
"PRIMARY KEY(`Unique Identifier`, `Unique Identifier Value`, `Update Record ID`, `MONTH`, `YEAR`)");


// add organization id
create_table("employment", 
" `MONTH` ENUM ('JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC')," +
" `YEAR` INT," +
" `Processing Details` VARCHAR(255)," + 
" `Update Record ID` INT," + 
" `Unique Identifier` VARCHAR(255)," + 
" `Unique Identifier Value` INT," + 
" `Date of Birth (YYYY-MM-DD)` DATE," + 
" `Postal Code where the service was received` VARCHAR(60)," + 
" `Registration in an employment intervention` VARCHAR(60)," + 
" `A referral to` VARCHAR(60)," + 
" `Language of Service` VARCHAR(60)," + 
" `Official Language of Preference` VARCHAR(60)," + 
" `Type of Organization Where Client Received Services` VARCHAR(60)," + 
" `Referred By` VARCHAR(60)," + 
" `Referral Date (YYYY-MM-DD)` DATE," + 
" `Employment Status` VARCHAR(60)," + 
" `Education Status` VARCHAR(60)," + 
" `Occupation in Canada` VARCHAR(60)," + 
" `Intended Occupation` VARCHAR(60)," + 
" `Intervention Type` VARCHAR(60)," + 
" `Long Term Intervention: Intervention Received` VARCHAR(60)," + 
" `Long Term Intervention: Status of Intervention` VARCHAR(60)," + 
" `Long Term Intervention: Reason For Leaving Intervention` VARCHAR(60)," + 
" `Long Term Intervention: Start Date (YYYY-MM-DD)` DATE," + 
" `Long Term Intervention: End Date (YYYY-MM-DD)` DATE," + 
" `Long Term Intervention: Size of Employer` VARCHAR(60)," + 
" `Long Term Intervention: Placement Was` VARCHAR(60)," + 
" `Long Term Intervention: Hours Per Week` VARCHAR(60)," + 
" `Long Term Intervention: Client Met Mentor Regularly at` VARCHAR(60)," + 
" `Long Term Intervention: Average Hours/Week with Mentor` INT," + 
" `Long Term Intervention: Profession` VARCHAR(60)," + 
" `Was Essential Skills and Aptitude Training Received?` ENUM(\"Yes\", \"No\", \"\")," + 
" `Computer skills` ENUM(\"Yes\", \"No\", \"\")," + 
" `Document Use` ENUM(\"Yes\", \"No\", \"\")," + 
" `Interpersonal Skills and Workplace Culture` ENUM(\"Yes\", \"No\", \"\")," + 
" `Leadership Training` ENUM(\"Yes\", \"No\", \"\")," + 
" `Numeracy` VARCHAR(60)," + 
" `Short Term Intervention 1: Service Received` VARCHAR(60)," +  //NUMBER THESE
" `Short Term Intervention 1: Date (YYYY-MM-DD)` DATE," + 
" `Short Term Intervention 2: Service Received` VARCHAR(60)," + 
" `Short Term Intervention 2: Date (YYYY-MM-DD)` DATE," + 
" `Short Term Intervention 3: Service Received` VARCHAR(60)," + 
" `Short Term Intervention 3: Date (YYYY-MM-DD)` DATE," + 
" `Short Term Intervention 4: Service Received` VARCHAR(60)," + 
" `Short Term Intervention 4: Date (YYYY-MM-DD)` DATE," + 
" `Short Term Intervention 5: Service Received` VARCHAR(60)," + 
" `Short Term Intervention 5: Date (YYYY-MM-DD)` DATE," + 
" `Support Services Received` VARCHAR(60)," + 
" `Care for Newcomer Children` VARCHAR(60)," + 
" `Child 1: Age` VARCHAR(60)," + 
" `Child 1: Type of Care` VARCHAR(60)," + 
" `Child 2: Age` VARCHAR(60)," + 
" `Child 2: Type of Care` VARCHAR(60)," + 
" `Child 3: Age` VARCHAR(60)," + 
" `Child 3: Type of Care` VARCHAR(60)," + 
" `Child 4: Age` VARCHAR(60)," + 
" `Child 4: Type of Care` VARCHAR(60)," + 
" `Child 5: Age` VARCHAR(60)," + 
" `Child 5: Type of Care` VARCHAR(60)," + 
" `Transportation` VARCHAR(60)," + 
" `Provisions for Disabilities` VARCHAR(60)," + 
" `Translation?` ENUM(\"Yes\", \"No\", \"\")," + 
" `Translation language Between` VARCHAR(60)," + 
" `Translation language And` VARCHAR(60)," + 
" `Interpretation?` ENUM(\"Yes\", \"No\", \"\")," + 
" `Interpretation language Between` VARCHAR(60)," + 
" `Interpretation language And` VARCHAR(60)," + 
" `Crisis Counselling` VARCHAR(60)," + 
" `Time Spent With Client/Addressing Employment Needs: Hours` INT," + 
" `Time Spent With Client/Addressing Employment Needs: Minutes` INT," + 
" `Reason for update` VARCHAR(60)," + 
" PRIMARY KEY(`Unique Identifier`, `Unique Identifier Value`, `Update Record ID`, `MONTH`, `YEAR`)");

// might add aa field to each table called month, who knows


create_table('`LT Client Enroll`', 
" `MONTH` ENUM ('JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC')," +
" `YEAR` INT," +
" `Processing Details` VARCHAR(255)," + 
" `Update record ID` INT," + 
" `Unique Identifier Type` VARCHAR(60)," + 
" `Unique Identifier Value` INT," + 
" `Date of Birth (YYYY-MM-DD)` DATE," + 
" `Postal Code where the service was received` VARCHAR(60)," + 
" `Course Code` VARCHAR(60)," + 
" `Date of Client's First Class (YYYY-MM-DD)` DATE," + 
" `Official Language of Preference` VARCHAR(60)," + 
" `Support services received` ENUM(\"Yes\", \"No\", \"\")," + 
" `Care for newcomer children` ENUM(\"Yes\", \"No\", \"\")," + 
" `Child 1: Age` VARCHAR(60)," + 
" `Child 1: Type of Care` VARCHAR(60)," + 
" `Child 2: Age` VARCHAR(60)," + 
" `Child 2: Type of Care` VARCHAR(60)," + 
" `Child 3: Age` VARCHAR(60)," + 
" `Child 3: Type of Care` VARCHAR(60)," + 
" `Child 4: Age` VARCHAR(60)," + 
" `Child 4: Type of Care` VARCHAR(60)," + 
" `Child 5: Age` VARCHAR(60)," + 
" `Child 5: Type of Care` VARCHAR(60)," + 
" `Transportation` ENUM(\"Yes\", \"No\", \"\")," + 
" `Provisions for disabilities` ENUM(\"Yes\", \"No\", \"\")," + 
" `Translation?` VARCHAR(60)," + 
" `Translation language Between` VARCHAR(60)," +  // DO THIS FOR BETWEEN and ands
" `Translation language And` VARCHAR(60)," + 
" `Interpretation?` VARCHAR(60)," + 
" `Interpretation language Between` VARCHAR(60)," + 
" `Interpretation language And` VARCHAR(60)," + 
" `Crisis Counselling` ENUM(\"Yes\", \"No\", \"\")," + 
" `Reason for update` VARCHAR(60)," +
"PRIMARY KEY(`Unique Identifier Type`, `Unique Identifier Value`, `Update record ID`, `MONTH`, `YEAR`)");


// TODO: CHANGE THE READING SKILLS ENUM
create_table('`LT Course Setup`',
" `MONTH` ENUM ('JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC')," +
" `YEAR` INT," +
" `Processing Details` VARCHAR(255)," + 
" `Update record ID` INT," + 
" `Course Code` VARCHAR(60)," + 
" `Notes` VARCHAR(60)," + 
" `Course Held On An Ongoing Basis` ENUM(\"Yes\", \"No\", \"\")," + 
" `Official Language of Course` VARCHAR(60)," + 
" `Format of Training Provided` VARCHAR(60)," + 
" `Classes Held At` VARCHAR(60)," + 
" `In-Person Instruction (%)` INT," + 
" `Online/Distance Instruction (%)` INT," + 
" `Total Number of Spots in Course` INT," + 
" `Number of IRCC-Funded Spots in Course` INT," + 
" `New Students Can Enrol in the Course` VARCHAR(60)," + 
" `Support Services Available for Client in this Course` ENUM(\"Yes\", \"No\", \"\")," + 
" `Care for Newcomer Children` ENUM(\"Yes\", \"No\", \"\")," + 
" `Transportation` ENUM(\"Yes\", \"No\", \"\")," + 
" `Provisions for Disabilities` ENUM(\"Yes\", \"No\", \"\")," + 
" `Course Start Date (YYYY-MM-DD)` DATE," + 
" `Course End Date (YYYY-MM-DD)` DATE," + 
" `Schedule: Morning` ENUM(\"Yes\", \"No\", \"\")," + 
" `Schedule: Afternoon` ENUM(\"Yes\", \"No\", \"\")," + 
" `Schedule: Evening` ENUM(\"Yes\", \"No\", \"\")," + 
" `Schedule: Weekend` ENUM(\"Yes\", \"No\", \"\")," + 
" `Schedule: Anytime` ENUM(\"Yes\", \"No\", \"\")," + 
" `Schedule: Online` ENUM(\"Yes\", \"No\", \"\")," + 
" `Instructional Hours Per Class` INT," + 
" `Classes Per Week` INT," + 
" `Weeks of Instruction` INT," + 
" `Weeks of Instruction Per Year` INT," + 
" `Dominant Focus of the Course` VARCHAR(60)," + 
" `Course Directed at a Specific Target Group` ENUM(\"Yes\", \"No\", \"\")," + 
" `Children (0-14 yrs)` ENUM(\"Yes\", \"No\", \"\")," + 
" `Youth (15-24 yrs)` ENUM(\"Yes\", \"No\", \"\")," + 
" `Senior` ENUM(\"Yes\", \"No\", \"\")," + 
" `Gender-specific` ENUM(\"Yes\", \"No\", \"\")," + 
" `Refugees` ENUM(\"Yes\", \"No\", \"\")," + 
" `Official language minorities` ENUM(\"Yes\", \"No\", \"\")," + 
" `Ethnic/cultural/linguistic group` ENUM(\"Yes\", \"No\", \"\")," + 
" `Deaf or Hard of Hearing` ENUM(\"Yes\", \"No\", \"\")," + 
" `Blind or Partially Sighted` ENUM(\"Yes\", \"No\", \"\")," + 
" `Clients with other impairments (physical, mental)` ENUM(\"Yes\", \"No\", \"\")," + 
" `Lesbian, Gay, Bisexual, Transgender, Queer (LGBTQ)` ENUM(\"Yes\", \"No\", \"\")," + 
" `Families/Parents` ENUM(\"Yes\", \"No\", \"\")," + 
" `Clients with international training in a regulated profession` ENUM(\"Yes\", \"No\", \"\")," + 
" `Clients with international training in a regulated trade` ENUM(\"Yes\", \"No\", \"\")," + 
" `Materials Used in Course` ENUM(\"Yes\", \"No\", \"\")," + 
" `Citizenship preparation` ENUM(\"Yes\", \"No\", \"\")," + 
" `PBLA language companion` ENUM(\"Yes\", \"No\", \"\")," + 
" `Contact Name` VARCHAR(60)," + 
" `Street Number` INT," + 
" `Street Name` VARCHAR(60)," + 
" `Street Type` VARCHAR(60)," + 
" `Street Direction` VARCHAR(60)," + 
" `Unit/Suite` INT," + 
" `Province` VARCHAR(60)," + 
" `City` VARCHAR(60)," + 
" `Postal Code (A#A#A#)` VARCHAR(60)," + 
" `Telephone Number (###-###-####)` VARCHAR(60)," + 
" `Telephone Extension` INT," + 
" `Email Address` VARCHAR(60)," + 
" `Listening Skill Level 1` ENUM ('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," + 
" `Listening Skill Level 2` ENUM ('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," + 
" `Listening Skill Level 3` ENUM ('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," + 
" `Listening Skill Level 4` ENUM ('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," + 
" `Listening Skill Level 5` ENUM ('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," + 
" `Listening Skill Level 6` ENUM ('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," + 
" `Listening Skill Level 7` ENUM ('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," + 
" `Listening Skill Level 8` ENUM ('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," + 
" `Listening Skill Level 9` ENUM ('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," + 
" `Listening Skill Level 10` ENUM ('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," + 
" `Listening Skill Level 11` ENUM ('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," + 
" `Listening Skill Level 12` ENUM ('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," + 
" `Speaking Skill Level 1` ENUM ('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," + 
" `Speaking Skill Level 2` ENUM ('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," + 
" `Speaking Skill Level 3` ENUM ('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," + 
" `Speaking Skill Level 4` ENUM ('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," + 
" `Speaking Skill Level 5` ENUM ('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," + 
" `Speaking Skill Level 6` ENUM ('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," + 
" `Speaking Skill Level 7` ENUM ('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," + 
" `Speaking Skill Level 8` ENUM ('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," + 
" `Speaking Skill Level 9` ENUM ('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," + 
" `Speaking Skill Level 10` ENUM ('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," + 
" `Speaking Skill Level 11` ENUM ('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," + 
" `Speaking Skill Level 12` ENUM ('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," + 
" `Reading Skill Level 1` ENUM ('Lit - Foundation L', 'Lit - 1L', 'Lit - 2L', 'Lit - 3L', 'Lit - 4L', 'Pre-CLB', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," + 
" `Reading Skill Level 2` ENUM ('Lit - Foundation L', 'Lit - 1L', 'Lit - 2L', 'Lit - 3L', 'Lit - 4L', 'Pre-CLB', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," + 
" `Reading Skill Level 3` ENUM ('Lit - Foundation L', 'Lit - 1L', 'Lit - 2L', 'Lit - 3L', 'Lit - 4L', 'Pre-CLB', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," + 
" `Reading Skill Level 4` ENUM ('Lit - Foundation L', 'Lit - 1L', 'Lit - 2L', 'Lit - 3L', 'Lit - 4L', 'Pre-CLB', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," + 
" `Reading Skill Level 5` ENUM ('Lit - Foundation L', 'Lit - 1L', 'Lit - 2L', 'Lit - 3L', 'Lit - 4L', 'Pre-CLB', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," + 
" `Reading Skill Level 6` ENUM ('Lit - Foundation L', 'Lit - 1L', 'Lit - 2L', 'Lit - 3L', 'Lit - 4L', 'Pre-CLB', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," + 
" `Reading Skill Level 7` ENUM ('Lit - Foundation L', 'Lit - 1L', 'Lit - 2L', 'Lit - 3L', 'Lit - 4L', 'Pre-CLB', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," + 
" `Reading Skill Level 8` ENUM ('Lit - Foundation L', 'Lit - 1L', 'Lit - 2L', 'Lit - 3L', 'Lit - 4L', 'Pre-CLB', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," + 
" `Reading Skill Level 9` ENUM ('Lit - Foundation L', 'Lit - 1L', 'Lit - 2L', 'Lit - 3L', 'Lit - 4L', 'Pre-CLB', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," + 
" `Reading Skill Level 10` ENUM ('Lit - Foundation L', 'Lit - 1L', 'Lit - 2L', 'Lit - 3L', 'Lit - 4L', 'Pre-CLB', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," + 
" `Reading Skill Level 11` ENUM ('Lit - Foundation L', 'Lit - 1L', 'Lit - 2L', 'Lit - 3L', 'Lit - 4L', 'Pre-CLB', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," + 
" `Reading Skill Level 12` ENUM ('Lit - Foundation L', 'Lit - 1L', 'Lit - 2L', 'Lit - 3L', 'Lit - 4L', 'Pre-CLB', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," + 
" `Reading Skill Level 13` ENUM ('Lit - Foundation L', 'Lit - 1L', 'Lit - 2L', 'Lit - 3L', 'Lit - 4L', 'Pre-CLB', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," + 
" `Reading Skill Level 14` ENUM ('Lit - Foundation L', 'Lit - 1L', 'Lit - 2L', 'Lit - 3L', 'Lit - 4L', 'Pre-CLB', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," +  
" `Reading Skill Level 15` ENUM ('Lit - Foundation L', 'Lit - 1L', 'Lit - 2L', 'Lit - 3L', 'Lit - 4L', 'Pre-CLB', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," + 
" `Reading Skill Level 16` ENUM ('Lit - Foundation L', 'Lit - 1L', 'Lit - 2L', 'Lit - 3L', 'Lit - 4L', 'Pre-CLB', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," + 
" `Reading Skill Level 17` ENUM ('Lit - Foundation L', 'Lit - 1L', 'Lit - 2L', 'Lit - 3L', 'Lit - 4L', 'Pre-CLB', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," + 
" `Writing Skill Level 1` ENUM ('Lit - Foundation L', 'Lit - 1L', 'Lit - 2L', 'Lit - 3L', 'Lit - 4L', 'Pre-CLB', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," + 
" `Writing Skill Level 2` ENUM ('Lit - Foundation L', 'Lit - 1L', 'Lit - 2L', 'Lit - 3L', 'Lit - 4L', 'Pre-CLB', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," + 
" `Writing Skill Level 3` ENUM ('Lit - Foundation L', 'Lit - 1L', 'Lit - 2L', 'Lit - 3L', 'Lit - 4L', 'Pre-CLB', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," + 
" `Writing Skill Level 4` ENUM ('Lit - Foundation L', 'Lit - 1L', 'Lit - 2L', 'Lit - 3L', 'Lit - 4L', 'Pre-CLB', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," + 
" `Writing Skill Level 5` ENUM ('Lit - Foundation L', 'Lit - 1L', 'Lit - 2L', 'Lit - 3L', 'Lit - 4L', 'Pre-CLB', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," +  
" `Writing Skill Level 6` ENUM ('Lit - Foundation L', 'Lit - 1L', 'Lit - 2L', 'Lit - 3L', 'Lit - 4L', 'Pre-CLB', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," +  
" `Writing Skill Level 7` ENUM ('Lit - Foundation L', 'Lit - 1L', 'Lit - 2L', 'Lit - 3L', 'Lit - 4L', 'Pre-CLB', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," +  
" `Writing Skill Level 8` ENUM ('Lit - Foundation L', 'Lit - 1L', 'Lit - 2L', 'Lit - 3L', 'Lit - 4L', 'Pre-CLB', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," +  
" `Writing Skill Level 9` ENUM ('Lit - Foundation L', 'Lit - 1L', 'Lit - 2L', 'Lit - 3L', 'Lit - 4L', 'Pre-CLB', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," +  
" `Writing Skill Level 10` ENUM ('Lit - Foundation L', 'Lit - 1L', 'Lit - 2L', 'Lit - 3L', 'Lit - 4L', 'Pre-CLB', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," +  
" `Writing Skill Level 11` ENUM ('Lit - Foundation L', 'Lit - 1L', 'Lit - 2L', 'Lit - 3L', 'Lit - 4L', 'Pre-CLB', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," +  
" `Writing Skill Level 12` ENUM ('Lit - Foundation L', 'Lit - 1L', 'Lit - 2L', 'Lit - 3L', 'Lit - 4L', 'Pre-CLB', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," +  
" `Writing Skill Level 13` ENUM ('Lit - Foundation L', 'Lit - 1L', 'Lit - 2L', 'Lit - 3L', 'Lit - 4L', 'Pre-CLB', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," +  
" `Writing Skill Level 14` ENUM ('Lit - Foundation L', 'Lit - 1L', 'Lit - 2L', 'Lit - 3L', 'Lit - 4L', 'Pre-CLB', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," +  
" `Writing Skill Level 15` ENUM ('Lit - Foundation L', 'Lit - 1L', 'Lit - 2L', 'Lit - 3L', 'Lit - 4L', 'Pre-CLB', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," +  
" `Writing Skill Level 16` ENUM ('Lit - Foundation L', 'Lit - 1L', 'Lit - 2L', 'Lit - 3L', 'Lit - 4L', 'Pre-CLB', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," +  
" `Writing Skill Level 17` ENUM ('Lit - Foundation L', 'Lit - 1L', 'Lit - 2L', 'Lit - 3L', 'Lit - 4L', 'Pre-CLB', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," + 
"PRIMARY KEY(`Update record ID`, `MONTH`, `YEAR`)");


create_table('`LT Client Exit`',
" `MONTH` ENUM ('JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC')," +
" `YEAR` INT," +
" `Processing Details` VARCHAR(255)," + 
" `Update record ID` INT," + 
" `Unique Identifier Type` VARCHAR(255)," + 
" `Unique Identifier Value` INT," + 
" `Date of Birth (YYYY-MM-DD)` DATE," + 
" `Course Code` VARCHAR(60)," + 
" `Client's Training Status` VARCHAR(60)," + 
" `Date Client Exited Course (YYYY-MM-DD)` DATE," + 
" `Reason for Exiting course` VARCHAR(60)," + 
" `Listening CLB Level` ENUM ('Insufficient Evidence', 'Pre-CLB', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," + 
" `Speaking CLB Level` ENUM ('Insufficient Evidence', 'Pre-CLB', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," + 
" `Reading CLB Level` ENUM ('Lit - Foundation L', 'Lit - 1L', 'Lit - 2L', 'Lit - 3L', 'Lit - 4L', 'Pre-CLB', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," + 
" `Writing CLB Level` ENUM ('Lit - Foundation L', 'Lit - 1L', 'Lit - 2L', 'Lit - 3L', 'Lit - 4L', 'Pre-CLB', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," + 
" `Was a Certificate issued to the client?` ENUM(\"Yes\", \"No\", \"\")," + 
" `Listening level indicated on Certificate` ENUM ('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," + 
" `Speaking level indicated on Certificate` ENUM ('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," + 
" `Support services received` ENUM(\"Yes\", \"No\", \"\")," + 
" `Care for newcomer children` ENUM(\"Yes\", \"No\", \"\")," + 
" `Child 1: Age` VARCHAR(60)," + 
" `Child 1: Type of Care` VARCHAR(60)," + 
" `Child 2: Age` VARCHAR(60)," + 
" `Child 2: Type of Care` VARCHAR(60)," + 
" `Child 3: Age` VARCHAR(60)," + 
" `Child 3: Type of Care` VARCHAR(60)," + 
" `Child 4: Age` VARCHAR(60)," + 
" `Child 4: Type of Care` VARCHAR(60)," + 
" `Child 5: Age` VARCHAR(60)," + 
" `Child 5: Type of Care` VARCHAR(60)," + 
" `Transportation` ENUM(\"Yes\", \"No\", \"\")," + 
" `Provisions for disabilities` ENUM(\"Yes\", \"No\", \"\")," + 
" `Translation` ENUM(\"Yes\", \"No\", \"\")," + 
" `Translation language Between` VARCHAR(60)," + 
" `Translation language And` VARCHAR(60)," + 
" `Interpretation` ENUM(\"Yes\", \"No\", \"\")," + 
" `Between` VARCHAR(60)," + 
" `And` VARCHAR(60)," + 
" `Crisis Counselling` ENUM(\"Yes\", \"No\", \"\")," + 
" `Reason for update` VARCHAR(60),"+
"PRIMARY KEY(`Unique Identifier Type`, `Unique Identifier Value`, `Update record ID`, `MONTH`, `YEAR`)");
*/