class App
{
    static questions()
    {
        let array = [
            {num: 1, question: 'What is the supreme law of the land?', answers:[{num: 1, answer: 'the Constitution'}]},
            {num: 2, question: 'What does the Constitution do?', answers:[{num: 1, answer: 'sets up the government'},{num: 2, answer: 'defines the government'},{num: 3, answer: 'protects basic rights of Americans'}]},
            {num: 3, question: 'The idea of self-government is in the first three words of the Constitution. What are these words?', answers:[{num: 1, answer: 'We the People'}]},
            {num: 4, question: 'What is an amendment?', answers:[{num: 1, answer: 'a change (to the Constitution)'},{num: 2, answer: 'an addition (to the Constitution)'}]},
            {num: 5, question: 'What do we call the first ten amendments to the Constitution?', answers:[{num: 1, answer: 'the Bill of Rights'}]},
            {num: 6, question: 'What is one right or freedom from the First Amendment?*', answers:[{num: 1, answer: 'speech'},{num: 2, answer: 'religion'},{num: 3, answer: 'assembly'},{num: 4, answer: 'press'},{num: 5, answer: 'petition the government'}]},
            {num: 7, question: 'How many amendments does the Constitution have?', answers:[{num: 1, answer: 'twenty-seven (27)'}]},
            {num: 8, question: 'What did the Declaration of Independence do?', answers:[{num: 1, answer: 'announced our independence (from Great Britain)'},{num: 2, answer: 'declared our independence (from Great Britain)'},,{num: 3, answer: 'said that the United States is free (from Great Britain)'}]},
            {num: 9, question: 'What are two rights in the Declaration of Independence?', answers:[{num: 1, answer: 'life'},{num: 2, answer: 'liberty'},{num: 3, answer: 'pursuit of happiness'}]},
            {num: 10, question: 'What is freedom of religion?', answers:[{num: 1, answer: 'You can practice any religion, or not practice a religion.'}]},
            {num: 11, question: 'What is the economic system in the United States?*', answers:[{num: 1, answer: 'capitalist economy'},{num: 2, answer: 'market economy'}]},
            {num: 12, question: 'What is the “rule of law”?', answers:[{num: 1, answer: 'Everyone must follow the law.'},{num: 2, answer: 'Leaders must obey the law.'},{num: 3, answer: 'Government must obey the law.'},{num: 4, answer: 'No one is above the law.'}]},
            {num: 13, question: 'Name one branch or part of the government.*', answers:[{num: 1, answer: 'Congress'},{num: 2, answer: 'legislative'},{num: 3, answer: 'President'},{num: 4, answer: 'executive'},{num: 5, answer: 'the courts'},{num: 6, answer: 'judicial'}]},
            {num: 14, question: 'What stops one branch of government from becoming too powerful?', answers:[{num: 1, answer: 'checks and balances'},{num: 2, answer: 'separation of powers'}]},
            {num: 15, question: 'Who is in charge of the executive branch?', answers:[{num: 1, answer: 'the President'}]},
            {num: 16, question: 'Who makes federal laws?', answers:[{num: 1, answer: 'Congress'},{num: 2, answer: 'Senate and House (of Representatives)'},{num: 3, answer: '(U.S. or national) legislature'}]},
            {num: 17, question: 'What are the two parts of the U.S. Congress?*', answers:[{num: 1, answer: 'the Senate and House (of Representatives)'}]},
            {num: 18, question: 'How many U.S. Senators are there?', answers:[{num: 1, answer: 'one hundred (100)'}]},
            {num: 19, question: 'We elect a U.S. Senator for how many years?', answers:[{num: 1, answer: 'six (6)'}]},
            {num: 20, question: 'Who is one of your state’s U.S. Senators now?*', answers:[{num: 1, answer: 'Todd Young (R)'},{num: 2, answer: 'Mike Braun (R)'},{num: '*', answer: '<a href="https://www.senate.gov/states/statesmap.htm" target="_blank">https://www.senate.gov/states/statesmap.htm</a>'}]},
            {num: 21, question: 'The House of Representatives has how many voting members?', answers:[{num: 1, answer: 'four hundred thirty-five (435)'}]},
            {num: 22, question: 'We elect a U.S. Representative for how many years?', answers:[{num: 1, answer: 'two (2)'}]},
            {num: 23, question: 'Name your U.S. Representative.', answers:[{num: 1, answer: 'Jackie Walorski (R)'}]},
            {num: 24, question: 'Who does a U.S. Senator represent?', answers:[{num: 1, answer: 'all people of the state'}]},
            {num: 25, question: 'Why do some states have more Representatives than other states?', answers:[{num: 1, answer: '(because of) the state’s population'},{num: 2, answer: '(because) they have more people'},{num: 3, answer: '(because) some states have more people'}]},
            {num: 26, question: 'We elect a President for how many years?', answers:[{num: 1, answer: 'four (4)'}]},
            {num: 27, question: 'In what month do we vote for President?*', answers:[{num: 1, answer: 'November'}]},
            {num: 28, question: 'What is the name of the President of the United States now?*', answers:[{num: 1, answer: 'Joe Biden (D)'}]},
            {num: 29, question: 'What is the name of the Vice President of the United States now?', answers:[{num: 1, answer: 'Kamala Harris (D)'}]},
            {num: 30, question: 'If the President can no longer serve, who becomes President?', answers:[{num: 1, answer: 'the Vice President'}]},
            {num: 31, question: 'If both the President and the Vice President can no longer serve, who becomes President?', answers:[{num: 1, answer: 'the Speaker of the House'}]},
            {num: 32, question: 'Who is the Commander in Chief of the military?', answers:[{num: 1, answer: 'the President'}]},
            {num: 33, question: 'Who signs bills to become laws?', answers:[{num: 1, answer: 'the President'}]},
            {num: 34, question: 'Who vetoes bills?', answers:[{num: 1, answer: 'the President'}]},
            {num: 35, question: 'What does the President’s Cabinet do?', answers:[{num: 1, answer: 'advises the President'}]},
            {num: 36, question: 'What are two Cabinet-level positions?', answers:[
                    {num: 1, answer: 'Secretary of Agriculture'},
                    {num: 2, answer: 'Secretary of Commerce'},
                    {num: 3, answer: 'Secretary of Defense'},
                    {num: 4, answer: 'Secretary of Education'},
                    {num: 5, answer: 'Secretary of Energy'},
                    {num: 6, answer: 'Secretary of Health and Human Services'},
                    {num: 7, answer: 'Secretary of Homeland Security'},
                    {num: 8, answer: 'Secretary of Housing and Urban Development'},
                    {num: 9, answer: 'Secretary of the Interior'},
                    {num: 10, answer: 'Secretary of Labor'},
                    {num: 11, answer: 'Secretary of State'},
                    {num: 12, answer: 'Secretary of Transportation'},
                    {num: 13, answer: 'Secretary of the Treasury'},
                    {num: 14, answer: 'Secretary of Veterans Affairs'},
                    {num: 15, answer: 'Attorney General'},
                    {num: 16, answer: 'Vice President'}
                ]
            },
            {num: 37, question: 'What does the judicial branch do?', answers:[{num: 1, answer: 'reviews laws'},{num: 2, answer: 'explains laws'},{num: 3, answer: 'resolves disputes (disagreements)'},{num: 4, answer: 'decides if a law goes against the Constitution'}]},
            {num: 38, question: 'What is the highest court in the United States?', answers:[{num: 1, answer: 'the Supreme Court'}]},
            {num: 39, question: 'How many justices are on the Supreme Court?', answers:[{num: 1, answer: 'nine (9)'}]},
            {num: 40, question: 'Who is the Chief Justice of the United States now?', answers:[{num: 1, answer: 'John Roberts'}]},
            {num: 41, question: 'Under our Constitution, some powers belong to the federal government. What is one power of the federal government?', answers:[{num: 1, answer: 'to print money'},{num: 2, answer: 'to declare war'},{num: 3, answer: 'to create an army'},{num: 4, answer: 'to make treaties'}]},
            {num: 42, question: 'Under our Constitution, some powers belong to the states. What is one power of the states?', answers:[{num: 1, answer: 'provide schooling and education'},{num: 2, answer: 'provide protection (police)'},{num: 3, answer: 'provide safety (fire departments)'},{num: 4, answer: 'give a driver’s license'},{num: 5, answer: 'approve zoning and land use'}]},
            {num: 43, question: 'Who is the Governor of your state now?', answers:[{num: 1, answer: 'Eric Holcomb'},{num: '*', answer: '<a href="https://www.usa.gov/state-governor" target="_blank">https://www.usa.gov/state-governor</a>'}]},
            {num: 44, question: 'What is the capital of your state?*', answers:[{num: 1, answer: 'Indianapolis'}]},
            {num: 45, question: 'What are the two major political parties in the United States?*', answers:[{num: 1, answer: 'Democratic and Republican'}]},
            {num: 46, question: 'What is the political party of the President now?', answers:[{num: 1, answer: 'Democratic (Party)'}]},
            {num: 47, question: 'What is the name of the Speaker of the House of Representatives now?', answers:[{num: 1, answer: 'Nancy Pelosi'},{num: 2, answer: 'Pelosi'},{num: '*', answer: '<a href="https://www.house.gov/representatives/find-your-representative" target="_blank">https://www.house.gov/representatives/find-your-representative</a>'}]},
            {num: 48, question: 'There are four amendments to the Constitution about who can vote. Describe one of them.', answers:[{num: 1, answer: 'Citizens eighteen (18) and older (can vote).'},{num: 2, answer: 'You don’t have to pay (a poll tax) to vote.'},{num: 3, answer: 'Any citizen can vote. (Women and men can vote.)'},{num: 4, answer: 'A male citizen of any race (can vote).'}]},
            {num: 49, question: 'What is one responsibility that is only for United States citizens?*', answers:[{num: 1, answer: 'serve on a jury'},{num: 2, answer: 'vote in a federal election'}]},
            {num: 50, question: 'Name one right only for United States citizens.', answers:[{num: 1, answer: 'vote in a federal election'},{num: 2, answer: 'run for federal office'}]},
            {num: 51, question: 'What are two rights of everyone living in the United States?', answers:[{num: 1, answer: 'freedom of expression'},{num: 2, answer: 'freedom of speech'},{num: 3, answer: 'freedom of assembly'},{num: 4, answer: 'freedom to petition the government'},{num: 5, answer: 'freedom of religion'},{num: 6, answer: 'the right to bear arms'}]},
            {num: 52, question: 'What do we show loyalty to when we say the Pledge of Allegiance?', answers:[{num: 1, answer: 'the United States'},{num: 2, answer: 'the flag'}]},
            {num: 53, question: 'What is one promise you make when you become a United States citizen?', answers:[{num: 1, answer: 'give up loyalty to other countries'},{num: 2, answer: 'defend the Constitution and laws of the United States'},{num: 3, answer: 'obey the laws of the United States'},{num: 4, answer: 'serve in the U.S. military (if needed)'},{num: 5, answer: 'serve (do important work for) the nation (if needed)'},{num: 6, answer: 'be loyal to the United States'}]},
            {num: 54, question: 'How old do citizens have to be to vote for President?*', answers:[{num: 1, answer: 'eighteen (18) and older'}]},
            {num: 55, question: 'What are two ways that Americans can participate in their democracy?', answers:[
                    {num: 1, answer: 'vote'},
                    {num: 2, answer: 'join a political party'},
                    {num: 3, answer: 'help with a campaign'},
                    {num: 4, answer: 'join a civic group'},
                    {num: 5, answer: 'join a community group'},
                    {num: 6, answer: 'give an elected official your opinion on an issue'},
                    {num: 7, answer: 'call Senators and Representatives'},
                    {num: 8, answer: 'publicly support or oppose an issue or policy'},
                    {num: 9, answer: 'run for office'},
                    {num: 10, answer: 'write to a newspaper'}                
                ]
            },
            {num: 56, question: 'When is the last day you can send in federal income tax forms?*', answers:[{num: 1, answer: 'April 15'}]},
            {num: 57, question: 'When must all men register for the Selective Service?', answers:[{num: 1, answer: 'at age eighteen (18)'},{num: 2, answer: 'between eighteen (18) and twenty-six (26)'}]},
            {num: 58, question: 'What is one reason colonists came to America?', answers:[
                    {num: 1, answer: 'freedom'},
                    {num: 2, answer: 'political liberty'},
                    {num: 3, answer: 'religious freedom'},
                    {num: 4, answer: 'economic opportunity'},
                    {num: 5, answer: 'practice their religion'},
                    {num: 6, answer: 'escape persecution'}
                ]
            },
            {num: 59, question: 'Who lived in America before the Europeans arrived?', answers:[{num: 1, answer: 'American Indians'},{num: 2, answer: 'Native Americans'}]},
            {num: 60, question: 'What group of people was taken to America and sold as slaves?', answers:[{num: 1, answer: 'Africans'},{num: 2, answer: 'people from Africa'}]},
            {num: 61, question: 'Why did the colonists fight the British?', answers:[{num: 1, answer: 'because of high taxes (taxation without representation)'},{num: 2, answer: 'because the British army stayed in their houses (boarding, quartering)'},{num: 3, answer: 'because they didn’t have self-government'}]},
            {num: 62, question: 'Who wrote the Declaration of Independence?', answers:[{num: 1, answer: '(Thomas) Jefferson'}]},
            {num: 63, question: 'When was the Declaration of Independence adopted?', answers:[{num: 1, answer: 'July 4, 1776'}]},
            {num: 64, question: 'There were 13 original states. Name three.', answers:[
                    {num: 1, answer: 'New Hampshire'},
                    {num: 2, answer: 'Massachusetts'},
                    {num: 3, answer: 'Rhode Island'},
                    {num: 4, answer: 'Connecticut'},
                    {num: 5, answer: 'New York'},
                    {num: 6, answer: 'New Jersey'},
                    {num: 7, answer: 'Pennsylvania'},
                    {num: 8, answer: 'Delaware'},
                    {num: 9, answer: 'Maryland'},
                    {num: 10, answer: 'Virginia'},
                    {num: 11, answer: 'North Carolina'},
                    {num: 12, answer: 'South Carolina'},
                    {num: 13, answer: 'Georgia'}
                ]
            },
            {num: 65, question: 'What happened at the Constitutional Convention?', answers:[{num: 1, answer: 'The Constitution was written.'},{num: 2, answer: 'The Founding Fathers wrote the Constitution.'}]},
            {num: 66, question: 'When was the Constitution written?', answers:[{num: 1, answer: '1787'}]},
            {num: 67, question: 'The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.', answers:[{num: 1, answer: '(James) Madison'},{num: 2, answer: '(Alexander) Hamilton'},{num: 3, answer: '(John) Jay'},{num: 4, answer: 'Publius'}]},
            {num: 68, question: 'What is one thing Benjamin Franklin is famous for?', answers:[{num: 1, answer: 'U.S. diplomat'},{num: 2, answer: 'oldest member of the Constitutional Convention'},{num: 3, answer: 'first Postmaster General of the United States'},{num: 4, answer: 'writer of “Poor Richard’s Almanac”'},{num: 5, answer: 'started the first free libraries'}]},
            {num: 69, question: 'Who is the “Father of Our Country”?', answers:[{num: 1, answer: '(George) Washington'}]},
            {num: 70, question: 'Who was the first President?*', answers:[{num: 1, answer: '(George) Washington'}]},
            {num: 71, question: 'What territory did the United States buy from France in 1803?', answers:[{num: 1, answer: 'the Louisiana Territory'},{num: 2, answer: 'Louisiana'}]},
            {num: 72, question: 'Name one war fought by the United States in the 1800s.', answers:[{num: 1, answer: 'War of 1812'},{num: 2, answer: 'Mexican-American War'},{num: 3, answer: 'Civil War'},{num: 4, answer: 'Spanish-American War'}]},
            {num: 73, question: 'Name the U.S. war between the North and the South.', answers:[{num: 1, answer: 'the Civil War'},{num: 2, answer: 'the War between the States'}]},
            {num: 74, question: 'Name one problem that led to the Civil War.', answers:[{num: 1, answer: 'slavery'},{num: 2, answer: 'economic reasons'},{num: 3, answer: 'states rights'}]},
            {num: 75, question: 'What was one important thing that Abraham Lincoln did?*', answers:[{num: 1, answer: 'freed the slaves (Emancipation Proclamation)'},{num: 2, answer: 'saved (or preserved) the Union'},{num: 3, answer: 'led the United States during the Civil War'}]},
            {num: 76, question: 'What did the Emancipation Proclamation do?', answers:[{num: 1, answer: 'freed the slaves'},{num: 2, answer: 'freed slaves in the Confederacy'},{num: 3, answer: 'freed slaves in the Confederate states'},{num: 4, answer: 'freed slaves in most Southern states'}]},
            {num: 77, question: 'What did Susan B. Anthony do?', answers:[{num: 1, answer: 'fought for women’s rights'},{num: 2, answer: 'fought for civil rights'}]},
            {num: 78, question: 'Name one war fought by the United States in the 1900s.*', answers:[{num: 1, answer: 'World War I'},{num: 2, answer: 'World War II'},{num: 3, answer: 'Korean War'},{num: 4, answer: 'Vietnam War'},{num: 5, answer: '(Persian) Gulf War'}]},
            {num: 79, question: 'Who was President during World War I?', answers:[{num: 1, answer: '(Woodrow) Wilson'}]},
            {num: 80, question: 'Who was President during the Great Depression and World War II?', answers:[{num: 1, answer: '(Franklin) Roosevelt'}]},
            {num: 81, question: 'Who did the United States fight in World War II?', answers:[{num: 1, answer: 'Japan, Germany, and Italy'}]},
            {num: 82, question: 'Before he was President, Eisenhower was a general. What war was he in?', answers:[{num: 1, answer: 'World War II'}]},
            {num: 83, question: 'During the Cold War, what was the main concern of the United States?', answers:[{num: 1, answer: 'Communism'}]},
            {num: 84, question: 'What movement tried to end racial discrimination?', answers:[{num: 1, answer: 'civil rights (movement)'}]},
            {num: 85, question: 'What did Martin Luther King, Jr. do?*', answers:[{num: 1, answer: 'fought for civil rights'},{num: 2, answer: 'worked for equality for all Americans'}]},
            {num: 86, question: 'What major event happened on September 11, 2001, in the United States?', answers:[{num: 1, answer: 'Terrorists attacked the United States.'}]},
            {num: 87, question: 'Name one American Indian tribe in the United States.', answers:[
                    {num: 1, answer: 'Cherokee'},
                    {num: 2, answer: 'Navajo'},
                    {num: 3, answer: 'Sioux'},
                    {num: 4, answer: 'Chippewa'},
                    {num: 5, answer: 'Choctaw'},
                    {num: 6, answer: 'Pueblo'},
                    {num: 7, answer: 'Apache'},
                    {num: 8, answer: 'Iroquois'},
                    {num: 9, answer: 'Creek'},
                    {num: 10, answer: 'Blackfeet'},
                    {num: 11, answer: 'Seminole'},
                    {num: 12, answer: 'Cheyenne'},
                    {num: 13, answer: 'Arawak'},
                    {num: 14, answer: 'Shawnee'},
                    {num: 15, answer: 'Mohegan'},
                    {num: 16, answer: 'Huron'},
                    {num: 17, answer: 'Oneida'},
                    {num: 18, answer: 'Lakota'},
                    {num: 19, answer: 'Crow'},
                    {num: 20, answer: 'Teton'},
                    {num: 21, answer: 'Hopi'},
                    {num: 22, answer: 'Inuit'}
                ]
            },
            {num: 88, question: 'Name one of the two longest rivers in the United States.', answers:[{num: 1, answer: 'Missouri (River)'},{num: 2, answer: 'Mississippi (River)'}]},
            {num: 89, question: 'What ocean is on the West Coast of the United States?', answers:[{num: 1, answer: 'Pacific (Ocean)'}]},
            {num: 90, question: 'What ocean is on the East Coast of the United States?', answers:[{num: 1, answer: 'Atlantic (Ocean)'}]},
            {num: 91, question: 'Name one U.S. territory.', answers:[
                    {num: 1, answer: 'Puerto Rico'},
                    {num: 2, answer: 'U.S. Virgin Islands'},
                    {num: 3, answer: 'American Samoa'},
                    {num: 4, answer: 'Northern Mariana Islands'},
                    {num: 5, answer: 'Guam'}
                ]
            },
            {num: 92, question: 'Name one state that borders Canada.', answers:[
                    {num: 1, answer: 'Maine'},
                    {num: 2, answer: 'New Hampshire'},
                    {num: 3, answer: 'Vermont'},
                    {num: 4, answer: 'New York'},
                    {num: 5, answer: 'Pennsylvania'},
                    {num: 6, answer: 'Ohio'},
                    {num: 7, answer: 'Michigan'},
                    {num: 8, answer: 'Minnesota'},
                    {num: 9, answer: 'North Dakota'},
                    {num: 10, answer: 'Montana'},
                    {num: 11, answer: 'Idaho'},
                    {num: 12, answer: 'Washington'},
                    {num: 13, answer: 'Alaska'}
                ]
            },
            {num: 93, question: 'Name one state that borders Mexico.', answers:[
                    {num: 1, answer: 'California'},
                    {num: 2, answer: 'Arizona'},
                    {num: 3, answer: 'New Mexico'},
                    {num: 4, answer: 'Texas'}
                ]
            },
            {num: 94, question: 'What is the capital of the United States?*', answers:[{num: 1, answer: 'Washington, D.C.'}]},
            {num: 95, question: 'Where is the Statue of Liberty?*', answers:[{num: 1, answer: 'New York (Harbor)'},{num: 2, answer: 'Liberty Island'}]},
            {num: 96, question: 'Why does the flag have 13 stripes?', answers:[{num: 1, answer: 'because there were 13 original colonies'},{num: 2, answer: 'because the stripes represent the original colonies'}]},
            {num: 97, question: 'Why does the flag have 50 stars?*', answers:[{num: 1, answer: 'because there is one star for each state'},{num: 2, answer: 'because each star represents a state'},{num: 3, answer: 'because there are 50 states'}]},
            {num: 98, question: 'What is the name of the national anthem?', answers:[{num: 1, answer: 'The Star-Spangled Banner'}]},
            {num: 99, question: 'When do we celebrate Independence Day?*', answers:[{num: 1, answer: 'July 4'}]},
            {num: 100, question: 'Name two national U.S. holidays.', answers:[
                    {num: 1, answer: 'New Year’s Day'},
                    {num: 2, answer: 'Martin Luther King, Jr. Day'},
                    {num: 3, answer: 'Presidents’ Day'},
                    {num: 4, answer: 'Memorial Day'},
                    {num: 5, answer: 'Independence Day'},
                    {num: 6, answer: 'Labor Day'},
                    {num: 7, answer: 'Columbus Day'},
                    {num: 8, answer: 'Veterans Day'},
                    {num: 9, answer: 'Thanksgiving'},
                    {num: 10, answer: 'Christmas'}
                ]
            }
        ];

        return array;
    }

    static show_all()
    {
        $("#main").html("");

        let questions = App.questions();
        questions.forEach(function(item){
            let answer = "";
            item.answers.forEach(function(item){
                answer += `<p>${item.num}. ${item.answer}</p>`;
            });

            $("#main").append(`<h3>[<span style="color:var(--first-color);">${item.num}</span>]. ${item.question}</h3>${answer}`);
        });
    }

    static show_random()
    {
        $("#main").html("");

        let max_questions = 10;
        let questions = App.questions();
        questions.sort( function() { return 0.5 - Math.random() } );
        questions.forEach(function(item,index){
            if(index < max_questions)
            {
                let answer = "";
                item.answers.forEach(function(item){
                    answer += `<p>${item.num}. ${item.answer}</p>`;
                });

                $("#main").append(`<h3>[<span style="color:var(--first-color);">${item.num}</span>]. ${item.question}</h3>${answer}`);
            }
        });
    }

    static show_search(question_number)
    {
        $("#main").html("");

        let found = false;
        let questions = App.questions();
        questions.forEach(function(item){
            if(Number(question_number) == Number(item.num))
            {
                found = true;
                let answer = "";
                item.answers.forEach(function(item){
                    answer += `<p>${item.num}. ${item.answer}</p>`;
                });

                $("#main").append(`<h3>[<span style="color:var(--first-color);">${item.num}</span>]. ${item.question}</h3>${answer}`);
            }
        });

        if(found == false)
            $("#main").append(`<h3>[<span style="color:var(--first-color);">${question_number}</span>]. Question number not found.</h3>`);
    }

    static toast_message(title,message)
    {
        VanillaToasts.create({
            title: title,
            text: message
        });
    }

    static show_success(message,callback=function(){})
    {
        swal({
            title: "Success",
            text: message,
            type: "success",
            buttonsStyling: !1,
            confirmButtonClass: "btn btn-success"
        })
        .then((Ok) => {
        if (Ok) 
            {
                callback();
            }
        });
    }

    static show_error(message,callback=function(){})
    {
        swal({
            title: "Warning",
            text: message,
            type: "warning",
            buttonsStyling: !1,
            confirmButtonClass: "btn btn-warning"
        })
        .then((Ok) => {
        if (Ok) 
            {
                callback();
            }
        });
    }

    static show_info(title,message,callback=function(){})
    {
        swal({
            title: title,
            html: message,
            type: "info",
            buttonsStyling: !1,
            confirmButtonClass: "btn btn-primary",
            width: 650
        })
        .then((Ok) => {
            if (Ok) 
            {
                callback();
            }
        });
    }
}