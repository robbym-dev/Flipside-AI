import chromadb
from chromadb.utils import embedding_functions
default_ef = embedding_functions.DefaultEmbeddingFunction()
# setup Chroma in-memory, for easy prototyping. Can add persistence easily!
client = chromadb.HttpClient(host='localhost', port=8000)

# Create collection. get_collection, get_or_create_collection, delete_collection also available!
collection = client.create_collection(name="my-documents2")

docs1 = """SCOTUS
Congress
Facts First
2024 Elections
Watch
Audio
Live TV
Log In
Navalny’s death puts a new spotlight on key dividing line between Trump and Biden
By Kevin Liptak, CNN
 7 minute read 
Updated 10:15 PM EST, Fri February 16, 2024
Video Ad Feedback
Alleged gang rape of 13-year-old girl by seven migrants causes outrage in Italy
01:04
What the south of Gaza looks like now in satellite images
01:02
Iceland volcano erupts for third time in two months
02:05
Chinese media seizes on US tensions to float false 'civil war' theories
02:30
'Make no mistake': Joe Biden says Putin is responsible for Navalny's death
02:13
'I want to scream': Russians react to Navalny's death
01:21
See last known footage of Navalny before reported death
00:46
'Yes Jared, we're still doing this': Tapper reacts to Kushner's comments about Saudi crown prince
03:43
What Alexey Navalny's death says about Putin
01:39
Navy destroyer crew has only seconds to respond to incoming missiles. See them in action
02:56
Hear Bill Nye's warning following alarming report
04:08
'This is about how they view their future': CNN reporter on Prince Harry and Meghan's new website
02:13
See King Charles's first public appearance since cancer diagnosis
00:23
Feng shui master makes predictions about Donald Trump and Taylor Swift for Lunar New Year
03:11
'Here we won't hear anything' Ukrainian children forced underground for safety
03:08
'A bird in heaven': Grandfather cradles 7-year-old granddaughter killed in southern Gaza
03:56
Alleged gang rape of 13-year-old girl by seven migrants causes outrage in Italy
01:04
What the south of Gaza looks like now in satellite images
01:02
Iceland volcano erupts for third time in two months
02:05
Chinese media seizes on US tensions to float false 'civil war' theories
02:30
'Make no mistake': Joe Biden says Putin is responsible for Navalny's death
02:13
'I want to scream': Russians react to Navalny's death
01:21
See last known footage of Navalny before reported death
00:46
'Yes Jared, we're still doing this': Tapper reacts to Kushner's comments about Saudi crown prince
03:43
CNN
 — 

The announcement of Alexey Navalny’s death on Friday thrust fresh urgency into the roiling debate in Washington over how forcefully to counter Russia and its president, Vladimir Putin, a question of wide-ranging consequence on which President Joe Biden and his likely opponent Donald Trump have adopted diametrically opposed positions.

The disparity in how the two men reacted to the news underscored the divide.

“Make no mistake: Putin is responsible for Navalny’s death. Putin is responsible. What has happened to Navalny is yet more proof of Putin’s brutality. Nobody should be fooled,” Biden said from the Roosevelt Room of the White House on Friday, forcefully pinning blame on “Putin and his thugs.”

Trump, meanwhile, said nothing directly about the Russian opposition leader in a post that his campaign said was his official response to Navalny’s death. Instead, he spent the morning posting more than 20 times on Truth Social about his criminal cases, his election poll numbers, immigrants in the US, his GOP presidential rival Nikki Haley, the Teamsters labor union and Fulton County District Attorney Fani Willis’ testimony in Georgia.

For Democrats and a minority of Republicans who are proponents of a muscular American presence in Europe within the NATO defense alliance, Navalny’s death served as yet another grim reminder of Putin’s brutality and the necessity of a US-led effort to isolate Moscow.

But for skeptics in the Trump camp, it was far from clear whether even the death in a notoriously brutal prison camp of Putin’s leading critic would alter a hardening view that Russia’s aggression no longer requires robust western reprisals, and that the nearly 80-year-old US-led security architecture in Europe is outdated.

The stakes could hardly be higher, and Biden warned forcefully from the White House that “history is watching” the debate unfold.

“The failure to support Ukraine at this critical moment will never be forgotten,” Biden said Friday. “It’s going to go down in the pages of history. It really is. It’s consequential. And the clock is ticking.”

The decision US politicians make in the coming weeks and months on whether to continue sending assistance to Ukraine could dramatically alter the battlefield realties there and send a global signal of American willingness not only to push back on Russia but to involve itself abroad at all.

Other top Biden administration officials wasted little time pinning blame on Navalny’s death directly on Putin, even as the Kremlin said it was working to determine the cause.

“Whatever story they tell, let us be clear Russia is responsible and we’ll have more to say on this later,” Vice President Kamala Harris said at the start of an address at the Munich Security Conference, where American support for Ukraine and to its NATO commitments has been a central and pressing topic of conversation.

A few moments earlier, Secretary of State Antony Blinken linked Navalny’s death directly to Russia’s president.

“His death in a Russian prison and the fixation and fear of one man only underscores the weakness and rot at the heart of the system that Putin has built,” the US top diplomat said at the start of a meeting with Indian officials on the sidelines of the Munich gathering.

Lingering just underneath those pronouncements was the reality that in the United States, the long-held consensus on the value of alliances and systems to guard against Russian aggression is fraying.

Asked whether Navalny’s death might spur Congress to act in providing more Ukraine aid, Biden was hopeful.

“I hope to God it helps,” he said.

Trump has shattered orthodox thinking

Trump, who seems to be reveling in undermining what had been a bipartisan consensus in American foreign policy for more than 70 years, has said he would encourage Russia to attack NATO allies who “didn’t pay” — a remark that sent shockwaves through the defense alliance, which had already been bracing for his potential return to office in 2025, but was hardly surprising to his followers.

Republican House Speaker Mike Johnson and fellow Republicans have refused to consider a spending package that includes around $60 billion in new funding for Ukraine, despite administration warnings that Ukrainian troops are running out of ammunition and failing to support Kyiv would amount to a victory for Putin. Even so, Johnson said in a statement Friday that Putin “is likely directly responsible” for Navalny’s death.

And Tucker Carlson, the former Fox News host with a major conservative following, returned from an interview with Putin last week (which even Putin complained was too soft) proclaiming how much nicer and cleaner Moscow was than any American city. Trump has reportedly mused about selecting Carlson as a running mate.

A select number of Republicans have sought to guard against the growing strain of isolationism within their party. On Friday, Trump’s sole remaining competitor for the Republican presidential nomination, former South Carolina Gov. Nikki Haley, assailed her opponent for saying he would encourage Russia to invade other nations and called the comments “so disturbing.”

“That means Donald Trump is siding with a thug who kills his political opponents,” Haley told CNN’s Kaitlan Collins on “The Source,” after saying Putin is “absolutely” directly responsible for Navalny’s death.

“He’s siding with someone who has made no bones about wanting to destroy America. He’s siding with someone who arrests American journalists and holds them hostage. And he’s siding with the dictator, instead of siding with our allies who stood with us at 9/11,” Haley added.

For Biden and his top officials, the assault on international norms and institutions has generated both fury and concern. Biden was aghast at Trump’s remark when he learned about it last weekend and condemned it as “dumb” and “un-American” in a speech from the White House on Tuesday.

A campaign issue

On Friday, the Biden campaign unveiled a new digital ad blasting Trump’s comment.

“Every president since Truman has been a rock-solid supporter of NATO - except for Donald Trump,” a narrator says as images of Trump with Putin flashes across the screen. “Trump wants to walk away from NATO. He’s even given Putin and Russia the greenlight to attack America’s allies.”

Part of a three-week, six-figure digital ad campaign, the spot is set to run through Super Tuesday targeting voters in the battleground states of Michigan, Wisconsin and Pennsylvania. The campaign said it was looking to reach more than 2.5 million Americans who identify as Estonian, Finnish, Latvian, Lithuanian, Norwegian and Polish — all NATO countries bordering Russia.

In 2021, Biden emerged from his first (and, so far, only) face-to-face meeting with Putin to say he had warned his counterpart that he’d be punished if Navalny were to die in prison.

“I made it clear to him that I believe the consequences of that would be devastating for Russia,” Biden said in Geneva, where the summit was held.

Since then, the United States and its partners in Europe and Asia have piled sanctions on Russia for its invasion of Ukraine, seeking to isolate the country from the global financial system and ratchet up costs on the perpetrators of the war.

But it’s those same sanctions that have caused energy prices to rise in Europe and taken a toll on the global economy, lending grist to some Republican efforts to halt foreign funding for Ukraine’s military and urge an immediate end to the conflict.

As American assistance for Ukraine wavers, defense officials have warned of the consequences on the battlefield. On Friday, an official told reporters the US is “sixteenth in the world” among the countries providing security assistance to Ukraine when considering the percentage of GDP.

“At this point, the United States is — we’re not the top donor to Ukraine when it comes to security assistance, or economic assistance for that matter,” the official told reporters. “When you look at security assistance, we’re actually the sixteenth in the world when it comes to percentage of GDP. So we have a lot to appreciate from our allies and partners.”

Harris, who was already preparing to provide reassurances to rattled allies during her visit to the Munich conference this week, sought to underscore American commitment to protecting democracy and freedom around the world, and took veiled aim at Trump for suggesting otherwise.

“They suggest it’s in the best interest of the American people to isolate ourselves from the world, to flout common understandings among nations, to embrace dictators, and adopt the repressive tactics and abandon commitments to our allies in favor of unilateral action,” Harris said in her remarks at the yearly gathering of US and European leaders, which has traditionally acted as a citadel of transatlanticism.

“Let me be clear—that worldview is dangerous, destabilizing and indeed shortsighted,” she said.

Shortly after Harris left the stage, Navalny’s wife made a surprise appearance in Munich to urge the international community to fight against Putin’s “horrific” regime.

“They will be brought to justice, and this day will come soon,” she said.

This story has been updated with additional developments.

CNN’s Haley Britzky, Lauren Fox, Kate Sullivan and Kit Maher contributed reporting.

RELATED
Search
US
Crime + Justice
Energy + Environment
Extreme Weather
Space + Science
World
Africa
Americas
Asia
Australia
China
Europe
India
Middle East
United Kingdom
Politics
SCOTUS
Congress
Facts First
2024 Elections
Business
Tech
Media
Calculators
Videos
Markets
Pre-markets
After-Hours
Market Movers
Fear & Greed
World Markets
Investing
Markets Now
Before the Bell
Nightcap
Opinion
Political Op-Eds
Social Commentary
Health
Life, But Better
Fitness
Food
Sleep
Mindfulness
Relationships
Entertainment
Movies
Television
Celebrity
Tech
Innovate
Gadget
Foreseeable Future
Mission: Ahead
Upstarts
Work Transformed
Innovative Cities
Style
Arts
Design
Fashion
Architecture
Luxury
Beauty
Video
Travel
Destinations
Food & Drink
Stay
News
Videos
Sports
Pro Football
College Football
Basketball
Baseball
Soccer
Olympics
Hockey
Watch
Live TV
CNN Headlines
CNN Max
Digital Studios
CNN Films
HLN
TV Schedule
TV Shows A-Z
CNNVR
Listen
CNN Underscored
Electronics
Fashion
Beauty
Health & Fitness
Home
Reviews
Deals
Money
Gifts
Travel
Outdoors
Pets
CNN Store
Coupons
Weather
Climate
Storm Tracker
Wildfire Tracker
Video
About CNN
Photos
Investigations
CNN Profiles
CNN Leadership
CNN Newsletters
Work for CNN
Watch
Listen
Live TV
FOLLOW CNN POLITICS
Log In
Terms of Use
Privacy Policy
Do Not Sell Or Share My Personal Information
Ad Choices
Accessibility & CC
About
Newsletters
Transcripts

© 2024 Cable News Network. A Warner Bros. Discovery Company. All Rights Reserved.
CNN Sans ™ & © 2016 Cable News Network."""
docs2 = """Watch
Audio
Live TV
Log In
Trump’s crushing fraud trial defeat is a microcosm of a life defined by breaking all the rules
Analysis by Stephen Collinson, CNN
 8 minute read 
Published 12:00 AM EST, Sat February 17, 2024
Former President Donald Trump speaks at his Mar-a-Lago estate, February 16, 2024, in Palm Beach, Florida. Rebecca Blackwell/AP
CNN
 — 

Donald Trump’s way of doing business is a window into his soul.

So his devastating loss Friday in a New York fraud case that threatens the empire on which he built his art of the deal mythology encapsulates more than a legal defeat.

It offers a character study of the behavior, beliefs and worldview that define the DNA of an irrepressible figure and unchained force who is again tearing at American unity, institutions, democracy and the rule of law as another contentious election looms.

A trial, which Trump tainted with histrionics and contempt for the judicial system, and Judge Arthur Engoron’s final, stinging judgment, revealed four foundational codes that explain Trump’s tumultuous path through a life that he simply sees as an endless stream of business and political deals he must close.

Trump thinks rules are for other people. He will always break them in seeking more wealth, more attention, or more votes.
If reality doesn’t get the ex-president what he wants, he conjures a new one.
Trump is compelled always to fight — even when stepping back would be smarter.
And when accountability finally arrives, he sees justice as an act of persecution by his enemies.

These Trump traits leap out of a staggering 92-page ruling handed down by Engoron, which left Trump facing a half-billion-dollar hole in his finances because of penalties and obligations in this and other cases.

The judge encapsulated the former president’s brazen refusal to play by the same rules under which everyone else must live — and that in this case are the key to a functioning banking and economic system — with the words: “ The frauds found here leap off the page and shock the conscience.”

But evidence never swayed Trump before and will not now, despite his crushing defeat. Whenever he loses, he just doubles down with a bigger falsehood — in this case that a fair legal process was simply a political attack by President Joe Biden.

“All comes out of the DOJ, it all comes out of Biden,” Trump said. “It’s a witch hunt against his political opponent, the likes of which our country has never seen.”

The climax of the case deepened the extraordinary legal morass facing Trump who is embroiled in multiple cases and faces the first of his criminal trials next month. The judgment portrays Trump, his adult sons and the Trump Organization, flouting business ethics, rules and laws to pull valuations for their property assets out of the air to get favorable loans, and then even more remarkably, refusing to accept the facts of their conduct when confronted with the evidence.

Practically, Engoron’s decision will impose severe financial and personal strain on Trump as he’s emerging as the almost certain Republican presidential nominee. While Trump boasts of being a billionaire many times over, it’s unclear if he has the liquidity to pay what he owes or if some of the “beautiful buildings” and golf resorts over which he often waxes fondly in campaign speeches are at risk. An emperor has no clothes moment that reveals the ex-president as less wealthy than he claims could threaten the mogul’s mystique on which he built his political brand and his self-identity.

Warning signs for Trump

Perhaps most concerning for Trump, Friday’s defeat suggests the shield of impunity that has allowed his rampaging political and business career is fraying. It comes only three weeks after a jury in a defamation case in Manhattan awarded the writer E. Jean Carroll $83 million in compensatory damages for public statements he made in 2019 disparaging her and denying her rape allegations.

While the ex-president’s strategy of basing his legal defenses on a political argument that he’s a victim of persecution from the Biden administration may be working in the campaign — at least for now — it is no match for the exacting standards of a court of law. At a defining moment of Trump’s fraud trial, when he was effectively making a campaign speech from the stand, Engoron asked Trump’s lawyer: “Can you control your client?” Of course, no one has ever been able to do so. But Engoron’s ruling shows that the legal system has the power to constrain Trump and impose consequences that the political system lacks, despite two impeachments and a lost presidential election. This must be a worry for Trump as he faces four criminal trials, and may partly explain his desire to win back power since presidential authority could help him block or reverse convictions – at least in federal cases.

Trump is also absorbing a double blow from New York, the larger-than-life city and state where he built towering skyscrapers and an outrageous personality based on an all-publicity-is-good-publicity attitude to 1980s tabloids. On Thursday, another New York judge locked in March 25 as the start date for his first criminal trial — over hush money payments to a former adult film star. The next day, the real estate empire that literally changed Manhattan’s skyline was rocked by Engoron’s verdict.

Trump has long since decamped to Florida, but Engoron’s ban on him running a New York corporation for three years will still sting. New York brashness and high stakes made Trump who he is. But his outlandishness has also repeatedly made him a Manhattan outsider. And now the city is rejecting him again, as part of a longterm trend that surely shaped Trump’s political super skill — his capacity to identify and harness the frustration of Americans who feel themselves rejected and condescended to by East Coast political, economic and media elites.

It’s too early to tell how Trump’s loss on Friday will affect his political campaign. The dizzying line-up of cases against him has only cemented his bond with Make American Great Again voters who bought into his expertly crafted narrative of persecution that rescued an initially lackluster 2024 election campaign and has him on the verge of capturing his third straight Republican nomination. The advantage of Trump’s sense of victimization is that every reverse further fuels it. One of his closest allies, Rep. Elise Stefanik of New York, therefore was able to ignore the overwhelming evidence revealed in the case of his malfeasance to declare: “The American people will not stand for this; they will elect President Trump as our 47th President of the United States.”

But for all of Biden’s political vulnerabilities, it’s hard to see how Trump’s increasing list of legal losses will improve his standing with the suburban moderate, swing state voters who paved the way to his loss in 2020. His remaining GOP foe Nikki Haley is making this point in her rallies. “March and April, he’s in one case court case. May and June, he’s in another,” Haley said while campaigning on Thursday ahead of the South Carolina primary. “He’s already said he’s going to spend most of this year in a courtroom, not on a campaign trail. That’s not a way you win.”

Friday’s ruling may turn out to be another blow to Republicans in a week in which they lost a key special election in New York and the GOP House majority bolted Washington in disarray. Biden, after a rough trot dominated by questions about his age, had a better week, as Tom Suozzi’s election win cooled panic among Democrats over their 2024 prospects and after the FBI charged an ex-informant with lying, in a move that eviscerated the GOP’s impeachment inquiry against him.

Flouted rules, new realities and a busted legal strategy

Trump’s belief that the rules are for others defines his business and political life. It’s essential, for example, to his claim now before the Supreme Court that presidents enjoy absolute immunity and cannot be prosecuted for their actions after they leave office.

Engoron, meanwhile, marveled at the ex-president’s audacity in flouting business ethics in inflating the values of his real estate and then his refusal to accept the truth of his actions when confronted with the evidence. “Defendants are incapable of admitting the error of their ways. Instead, they adopt a ‘See no evil, hear no evil, speak no evil’ posture that the evidence belies,” he wrote. Engoron explained that such a crushing verdict was necessary to account for Trumps ill-gotten gains — because he believes they will continue in the absence of a painful price: “Donald Trump testified that, even today, he does not believe the Trump Organization needed to make any changes based on the facts that came out during this trial.”

Trump’s willingness to create a convenient reality is also at the heart of the case filed against him by New York Attorney General Letitia James, which rested on accusations that he serially inflated the values of his holdings to obtain better terms from banks and financial firms and to ultimately make more money. The ex-president claims that there were no victims from his behavior and that everyone made money. Yet regular Americans wouldn’t get away with such conduct in their far less lucrative financial lives and investments. And Engoron argued that he was obligated to “protect the integrity of the financial marketplace and, thus, the public as a whole.”

Trump’s propensity to simply alter truth and fact transferred easily from the business world to politics. It emerged hours into his presidency when he declared he had the biggest inaugural crowd ever despite photos proving the contrary. And his greatest fraud rests in his lies that he won the 2020 election and that the Constitution gave him the right to stay in power despite his defeat. The con-game of plucking a number out of the air to vastly over value his Trump Tower triplex is not that much different, after all, than calling Georgia election officials and asking them to “find” votes so that he could overturn Biden’s victory in the key swing state.

In his book, “Never Enough,” author Michael D’Antonio shows how Trump was taught by a demanding father and teachers that he needed to be “a killer” and that winning “was the only thing.” This explains his relentless willingness to fight, his never-ending legal crusades and his fervent desire at 77 years old to win back power after a humiliating election loss that nearly wrecked American democracy. Yet this refusal to ever admit defeat also appears to be leading Trump into dangerous legal territory.

The former president’s fight at all costs legal strategy seems to be coming unstuck. “Trump is unique in that he stubbornly thumbs his nose at our justice system and finds himself in legal turmoil,” said Neama Rahmani, a former federal prosecutor and president of West Coast Trial Lawyers. “Sometimes it’s better to cooperate with authorities or to settle a civil lawsuit rather than fight a losing battle.”

For Trump, the battle itself and the act of breaking rules are the point of existence itself, even when they lead him into legal and constitutional peril. His flawed philosophy that in business and life, it’s all about closing one more deal, means that even crushing defeats like the 2020 election and his fraud trial cannot change him.

“I don’t do it for the money. I’ve got enough, much more than I’ll ever need,” Trump wrote in “The Art of the Deal.” He added: “I do it to do it. Deals are my art form.”

RELATED
Log In
Live TV
Listen
Watch
US
World
Politics
Business
Markets
Opinion
Health
Entertainment
Tech
Style
Travel
Sports
Watch
Listen
CNN Underscored
Coupons
Weather
About CNN
FOLLOW CNN POLITICS
Terms of Use
Privacy Policy
Do Not Sell Or Share My Personal Information
Ad Choices
Accessibility & CC
About
Newsletters
Transcripts

© 2024 Cable News Network. A Warner Bros. Discovery Company. All Rights Reserved.
CNN Sans ™ & © 2016 Cable News Network."""
docs3 = """US
Watch
Audio
Live TV
Log In
Chiefs embrace hurting Kansas City community as shooting investigation continues with 2 teens charged. Here’s what we know
By Ashley R. Williams, CNN
 4 minute read 
Published 12:55 AM EST, Sat February 17, 2024
Video Ad Feedback
Witness describes moment he tackled man with a gun at Kansas City Chiefs rally
01:48 - Source: CNN
CNN
 — 

Kansas City continued mourning after a mass shooting at the Chiefs Super Bowl victory rally left a mother of two dead and injured more than 20 others – including children – as investigators worked to figure out exactly how the violence unfolded.

Authorities on Friday said two teenagers would face charges connected to the deadly shooting on the west side of Union Station that sent frightened Chiefs fans running for cover following the parade that an estimated 1 million people attended on Wednesday.

The suspected juveniles, Kansas City police chief Stacey Graves said on Friday, “hurt innocent people” while “simultaneously scarring an entire community” after a joyous afternoon was transformed into one of panic and fear as gunfire was mistaken for fireworks.

This week, the Kansas City Chiefs – some of whom were still on the stage after the rally ended and the sounds of bullets pierced the air – embraced the still-reeling community, giving back through emergency funds for victims and families and visiting injured children in the hospital.

Meanwhile, investigators, who recovered multiple guns from the scene, continue to piece together what unfolded Wednesday and say analyzing recovered bullets will help determine which gun was responsible for the death and injuries, a law enforcement source told CNN on Friday.

The shooting on Wednesday marked at least the 48th mass shooting to happen in the United States so far this year, according to the Gun Violence Archive, which like CNN counts those in which four or more are shot, not including a perpetrator.

It also marked the second time within a year that gunfire rang out at a major US sports title celebration after two people were wounded in June as Denver fans left a parade for the NBA’s Nuggets.

Here’s what we know about the shooting and investigation.

Gunfire interrupts an afternoon of celebrating
People flee after shots were fired near the Kansas City Chiefs' Super Bowl LVIII victory parade on February 14, 2024, in Kansas City, Missouri. Andrew Caballero-Reynolds/AFP/Getty Images

More than 800 police officers were in the area of Union Station for the victory rally when the shooting began, Police chief Stacey Graves said. As celebrations wrapped up, confetti was still floating toward the ground when attendees reported hearing an altercation and seeing a gun get drawn, CNN previously reported.

“People had started backing up, and then he pulled it out,” Jacob Gooch Sr., who attended the rally with his wife, daughter and son, told CBS, “and just started shooting and spinning in a circle.”

Screams were heard, and people scattered in fear.

Manny Abarca, a Jackson County legislator, told CNN’s Laura Coates a warning quickly spread as a flood of people ran for safety: “Guns, police, run.”

Authorities say the shooting appears to have been a “dispute between several people that ended in gunfire” and there is no indication of a “nexus to terrorism or homegrown violent extremism,” according to Graves.

43-year-old woman killed, several kids hurt

The gunfire killed Elizabeth “Lisa” Lopez-Galvan, a 43-year-old mother and DJ who was remembered as an avid Kansas City Chiefs fan with a natural gift for bringing laughter to those she knew.

An undated photo of Lisa Lopez-Galvan. From KKFI

Lopez-Galvan spent her Tuesday nights co-hosting the “A Taste of Tejano” show on KKFI radio 90.1 FM, a noncommercial, community radio station where she volunteered.

At least 23 others were injured – almost half of whom were children.

CNN spoke with four hospitals that received 29 patients in the shooting’s aftermath, and officials said 19 of those hurt were treated for gunshot injuries.

Children’s Mercy Hospital received 12 patients following the shooting that included one adult and 11 children between 6 and 15 years old. Nine of the children had suffered gunshot wounds, according to Stephanie Meyer, the hospital’s chief nursing officer.

By Friday morning, only one of the patients remained hospitalized at Children’s Mercy Hospital, a spokesperson said.

2 teens face charges connected to shooting

RELATED ARTICLE
Missouri has some of the weakest gun laws in the US. Here’s how that is impacting the Kansas City shooting investigation

Two teenagers face gun-related and resisting arrest charges in the deadly shooting. Additional charges are expected to be filed as the investigation continues, according to the Office of the Juvenile Officer.

“We will not relent until everyone who may have played a part in these crimes is apprehended so that they may be punished to the fullest extent of the law,” Graves said on Friday.

In addition to examining bullets and shell casings left at the scene, investigators with the Bureau of Alcohol, Tobacco, Firearms and Explosives plan to look into whether those match any guns or weapons in databases, a law enforcement source told CNN.

Chiefs give back to hurting community

The Kansas City Chiefs and the United Way of Greater Kansas City launched KC Strong, an emergency response fund to help the shooting victims and their families, the team announced on X Friday.

The team said it contributed $200,000 to the fund “supporting victims and their families, violence prevention and mental health services, and first responders,” according to the post.

The team’s quarterback, Patrick Mahomes, and his wife, Brittany, visited two young sisters who were shot in the leg, their family said in a statement.

A sign made from chairs spelled out "KC STRONG" Thursday afternoon, Feb. 15, 2024, in front of Union Station, the site of a mass shooting at the Kansas City Chiefs Super Bowl rally on Wednesday. Tammy Ljungblad/The Kansas City Star/Tribune News Service/Getty Images

The siblings, ages 8 and 10, posed for photos in their hospital rooms with the Mahomes couple.

Meanwhile, honorary Chief Taylor Swift made two $50,000 donations to a GoFundMe for the family of Lopez-Galvan. A representative for the singer, who is dating the team’s tight end Travis Kelce, confirmed to CNN the donation from Swift.

CNN’s Alisha Ebrahimji, Alaa Elassar, Kevin Dotson, Caroll Alvarado, Megan Thomas and Michelle Krupa contributed to this report.

RELATED
Log In
Live TV
Listen
Watch
US
World
Politics
Business
Markets
Opinion
Health
Entertainment
Tech
Style
Travel
Sports
Watch
Listen
CNN Underscored
Coupons
Weather
About CNN
US
FOLLOW CNN
Terms of Use
Privacy Policy
Do Not Sell Or Share My Personal Information
Ad Choices
Accessibility & CC
About
Newsletters
Transcripts

© 2024 Cable News Network. A Warner Bros. Discovery Company. All Rights Reserved.
CNN Sans ™ & © 2016 Cable News Network.
"""
docs4 = """US
Watch
Audio
Live TV
Log In
Missouri has some of the weakest gun laws in the US. Here’s how that is impacting the Kansas City shooting investigation
By Ashley R. Williams and Josh Campbell, CNN
 5 minute read 
Published 11:36 AM EST, Fri February 16, 2024
A law enforcement officer scans the scene following a shooting on Wednesday in Kansas City, Missouri. Charlie Riedel/AP
CNN
 — 

The deadly mass shooting that unfolded Wednesday following a Super Bowl celebration rally in Kansas City – a city that recorded its deadliest-ever year in 2023 – occurred in a state known to have some of the weakest gun laws in the country.

The gunfire killed a 43-year-old woman and injured at least 23 others during a Kansas City Chiefs parade where around 1 million people gathered to celebrate, and prompted calls from the Biden administration for Congress to pass “reasonable gun safety laws.”

“What are we waiting for? What else do we need to see? How many more families need to be torn apart?” President Joe Biden said in a statement Wednesday.

The lax gun laws in Missouri, where at least 155 mass shootings have happened since 2013, have created challenges for law enforcement and officials in preventing and investigating gun violence in the state. Here’s why.

Missouri’s weak laws have led to gun deaths spike

While Missouri does have partial open carry regulations and certain child access prevention laws in place, the Giffords Law Center to Prevent Gun Violence has said the state’s gun laws are “appallingly weak.”

Missouri ranks 38th among the 50 states when it comes to gun law strength; California leads the country with the toughest enacted gun laws and Arkansas ranks at 50 for the weakest, according to Everytown for Gun Safety.

RELATED ARTICLE
Kansas City shooting may have stemmed from personal dispute, police say; 2 juveniles detained

The gun control advocacy and gun violence prevention-focused nonprofit says Missouri, which is among the top 10 states with the most firearm-related deaths, lacks any “of the foundational gun violence prevention laws” – including passing background checks and/or purchase permitting, secure gun storage requirements, requiring a concealed carry permit, Extreme Risk laws and rejecting Shoot First laws.

Extreme Risk laws, also called Red Flag laws, temporarily prevent a person in crisis from accessing guns by letting police or loved ones intervene through petitioning a court order.

Shoot First laws, or Stand Your Ground laws, “allow people to shoot and kill in public even if they can safely walk away from the situation,” according to Everytown.

The state’s 2007 repeal of an 80-year-old permit-to-purchase law led to around a 27% rise in the state’s gun homicide rate, according to Everytown.

“Missouri is a gun rights paradise, but this clearly has public safety implications,” said Jennifer Mascia, a CNN contributor and senior news writer at The Trace, a nonprofit journalism outlet focusing on gun-related news.

The state’s gun laws were rolled back specifically to prevent incidents like Wednesday’s shooting – “to allow ‘good guys with guns’ to easily access weapons and defend themselves and their communities,” Mascia said.

Crime scene tape hangs from a fence following the prior day's shooting at Kansas City's Union Station. Emmalee Reed/CNN

But today, Mascia noted, Missouri has one of the highest gun-death rates in the United States.

The state’s lax gun laws have allowed for firearms to reach criminal hands through legal gun owners by way of theft, private sales and straw buyers, Mascia explained.

“There’s no mechanism in our laws to periodically check in with gun owners and make sure they’re properly handling their guns, and locking them up and reporting thefts,” she said. “That’s especially true in Missouri, where you can buy a gun in a private sale and carry it in public with no background check and no authorities ever being notified.”

How Missouri’s gun laws make crime investigation difficult

While some leaders, including Kansas City Mayor Quinton Lucas and St. Louis Mayor Tishaura Jones, have pushed back against Missouri’s restrictions on its cities’ ability to fight gun violence, the state – which controls law enforcement in Kansas City – has made it “nearly impossible” for cities to do so, according to Everytown.

The state enacted the Second Amendment Preservation Act in 2021, which would subject local and state law enforcement officers to $50,000 fines for helping to enforce a federal gun law, according to the Giffords Law Center.

However, in a 24-page decision last March, US District Judge Brian Wimes ruled the law is “invalidated as unconstitutional in its entirety,” CNN previously reported.

The US Supreme Court rejected an emergency petition by the State of Missouri to block Wimes’ decision.

The Missouri State Capitol is seen Friday, September 16, 2022, in Jefferson City. Jeff Roberson/AP

Missouri cities, including Kansas City, can’t pass their own gun laws; only the state legislature can, according to Mascia.

“But cities have been trying: Several initiatives vying for the Missouri ballot in November would reinstate the ability of cities to make their own gun laws — specifically Kansas City and St. Louis,” she said.

Missouri lawmakers have also introduced several gun-related bills during the 2024 state legislative session, including legislation to lower the age requirement for carrying a concealed firearm from 19 to 18 and legislation to allow the state to take control of municipal law enforcement agencies from city government – a measure that “would frustrate the ability of Missouri cities to combat gun violence,” according to Everytown.

GALLERY

RELATED GALLERY
In pictures: Shooting in Kansas City after Chiefs celebration

Following Wednesday’s deadly shooting in Kansas City, police face the critical challenge of not only determining whether firearms recovered at the scene were fired during the mass shooting, but also linking each weapon to a specific shooter.

Permissive gun laws make this even more challenging because weapons can easily change hands without registration requirements that would allow police to quickly trace the owner of a firearm.

Bullets, shell casings are major focus of investigation

Specialists from the Bureau of Alcohol, Tobacco, Firearms, and Explosives are also analyzing bullets recovered at the scene and from victims to determine which gun was responsible for killing or injuring specific people, a law enforcement source told CNN.

Ejected casings are additionally being studied to identify whether unique markings left behind on a shell casing by a gun during firing – similar to a fingerprint – match other shootings in law enforcement databases, the source said.

In addition to helping tie those guns to rounds fired at the scene, the source said ATF investigators are working to determine whether any bullets and shell casings recovered fail to fit the unique profile of those recovered weapons, which could indicate additional suspects are at large.

But even if a firearm associated with Wednesday’s mass shooting does match with a weapon in the ATF’s database of previous shootings, the absence of any laws in Missouri requiring registration, coupled with the ability of gun owners to anonymously transfer weapons through private sales, does not guarantee police will be any closer to identifying the person who pulled the trigger.

CNN’s Ariane de Vogue and Devan Cole contributed to this report.

RELATED
Log In
Live TV
Listen
Watch
US
World
Politics
Business
Markets
Opinion
Health
Entertainment
Tech
Style
Travel
Sports
Watch
Listen
CNN Underscored
Coupons
Weather
About CNN
US
FOLLOW CNN
Terms of Use
Privacy Policy
Do Not Sell Or Share My Personal Information
Ad Choices
Accessibility & CC
About
Newsletters
Transcripts

© 2024 Cable News Network. A Warner Bros. Discovery Company. All Rights Reserved.
CNN Sans ™ & © 2016 Cable News Network."""
# Add docs to the collection. Can also update and delete. Row-based API coming soon!
collection.add(
    documents=[docs1, docs2, docs3, docs4], # we handle tokenization, embedding, and indexing automatically. You can skip that and add your own embeddings as well
    ids=["doc1", "doc2", "doc3", "doc4"], # unique for each doc
)

# Query/search 2 most similar results. You can also .get by id
results = collection.query(
    query_texts=["""SKIP TO CONTENT
SKIP TO SITE INDEX
7-Year-Old Son of Houston Church Shooter Still Struggling to Survive

Samuel, born three months premature, had already faced challenges for much of his life as his mother battled mental illness, family members say. Now he is in a fight for his life.

Share full article
Houston police officers and evacuated churchgoers near Lakewood Church last Sunday after the shooting.
Credit...
Karen Warren/Houston Chronicle, via Associated Press

By Edgar Sandoval

Reporting from San Antonio

Feb. 16, 2024

A 7-year-old boy who was shot in the head when his mother opened fire at a Houston megachurch on Sunday has undergone at least two surgeries in 24 hours and “lost a major part of what makes us who we are,” his grandmother said in an update on Thursday.

The surgeries included removal of part of the frontal lobe of the brain and a portion of the skull, the grandmother, Walli Carranza, said in a post on Facebook. It included a jarring photo of the child from his hospital bed, where officials said he remained in critical condition. She said the boy was engaged in a “fight for life.”

Authorities said the boy, Samuel, was with his mother on Sunday when she entered the Lakewood Church in Houston, just after a service led by the televangelist Joel Osteen. The mother, Genesse Ivonne Moreno, opened fire with an AR-15 and was killed in a gunfight with two security guards, officials said. It is still unknown who fired the shots that struck Ms. Moreno’s son and injured a bystander, a 57-year-old man who has since been released from the hospital.

Interviews with people who know the family, police records, and legal documents from a divorce and custody battle filed by the child’s paternal relatives offered a window into Samuel’s troubled upbringing, beginning with his premature birth in 2016 when his mother was just six months pregnant.

His father, Enrique Carranza III, who is Ms. Carranza’s son, described him in the divorce case as a toddler who often hit and bit anyone who tried to touch him. Because he was kept inside most of the time, he did not see a bird or a tree until he turned three, his father told the court.

In a 74-page affidavit of her own, Ms. Carranza, who is a rabbi, wrote that her daughter-in-law had been diagnosed with schizophrenia and began to unravel after she stopped taking her medication during her pregnancy. She described Ms. Moreno after that as a detached parent who avoided eye contact with her son and referred to him as “the boy,” or “the child.”

Image
The shooting at the church occurred just after one service. 
Credit...
Callaghan O'Hare/Reuters

A hearing on the family’s bid to be granted custody of the boy under a conservatorship had been scheduled for May.

Ms. Moreno’s behavior had become so erratic in recent months that many of her neighbors in Conroe, Texas, a small city near Houston, complained that she created an environment of fear in the otherwise quiet neighborhood. The Conroe Police Department recorded dozens of calls to the block where Ms. Moreno lived with her mother, based mainly on complaints about harassment, threats and disorderly conduct. Many of the calls came from Ms. Moreno herself, according to police call logs. But it appeared that the authorities were reluctant to intervene in what were seen as personal matters.

When Ms. Carranza contacted them in July 2020 and shared a trove of emails that she said caused her concern about her grandson’s safety, the police reviewed them and determined that “no offense has occurred,” according to the records.

The officer wrote that the local district attorney did not want to “accept harassment charges” because of the divorce fight between the couple.

A police department spokesman, Sgt. David Dickenson, said none of the numerous calls rose to an incident that would warrant police intervention.

“There was no information related by the complainants, by the neighbors that would give officers the authority to make arrests or mental health detention,” he said. “If there’s no violation of law, we don’t have the authority to do anything.”

In an interview, Ms. Carranza said that Ms. Moreno and her son made a good couple when they began dating despite the fact that he was Jewish and she was a practicing Muslim.

In the early days after their marriage in June 2015, Ms. Moreno “did beautifully” when she took her medication, Ms. Carranza said. But things changed when Ms. Moreno learned she was pregnant and stopped taking it, she said. She became violent and unstable and was admitted involuntarily for psychiatric treatment at a hospital in Houston, where she remained for several weeks.

During those early years, her daughter-in-law kept several guns around the house, including a handgun in Samuel’s diaper bag, Ms. Carranza said in an affidavit.

Unable to deal with what he described as his wife’s violent outbursts, Mr. Carranza said in court filings, he filed for divorce. The animosity between the two of them led to his losing track of his son, he said. During a divorce court hearing in 2021, he testified that he was not present during his son’s birth and learned about it only the next month.

“She told the hospital that I was dead,” he testified.

In her own affidavit, Ms. Moreno alleged that Mr. Carranza had been physically abusive during their marriage. “On numerous occasions,” she wrote, he “made me fear for my safety.”

Mr. Carranza said it appeared his wife, who was apparently living with her mother, was trying to keep him away from his son, but he was able to track them down three years after his birth.

“I found her and we spent about two months together every day,” he told the court.

Image
First responders monitor the scene after the shooting at Lakewood Church in Houston.
Credit...
Callaghan O'Hare/Reuters

He said he was horrified to learn that the boy was in a near feral state, unable to talk, prone to anger and still relying on a feeding tube to eat.

“He didn’t speak at all. He exhibited violence. I mean, you’d pick him up and he’d hit you in the face,” Mr. Carranza told the court. “He’s just making noises and you know; I’m saying stuff to him, but he was at least, you know, trying to say words.”

He said he took his son to various parks and beaches, providing what he described as Samuel’s first experience with a playground or the outdoors. Getting him to eat solid food, Mr. Carranza said, proved more challenging. The initial goal, he said, was to get the boy to “not upchuck at the sight of food.”

He also learned that there had been an attempt at an intervention much earlier. He testified that he learned that child welfare authorities in Texas had investigated allegations that the boy was born with drugs in his system but never informed Mr. Carranza of it because his wife had deliberately left his name off his son’s birth certificate.

Patrick Crimmins, a spokesman with the Department of Family and Protective Services, said on Friday that he could not comment on Samuel’s case because of privacy restrictions.

Mr. Carranza is currently serving a prison sentence of more than two years in Florida, according to inmate records, for failure to register as a sex offender. His mother said the case stems from a statutory rape case several years ago when, at 18, he had a relationship with an underage girl. Ms. Carranza said she believes her daughter-in-law reported her son to the authorities when he moved to Florida.

Officials have said Ms. Moreno appeared to have purchased the AR-15 used in the attack at the church in December, and that she also had brought with her a .22 caliber rifle concealed in a bag but did not use it.

The authorities have not said how she purchased the weapons.

Since the shooting, Ms. Carranza wrote in her Facebook post that Samuel’s heart had stopped several times, and doctors had been unable to determine if he had significant brain activity because his scalp tissue was too fragile to allow the attachment of the necessary wires.

Neighbors in Conroe have been waiting anxiously to learn of any update.

Farrah Signorelli, who lives three doors down from Ms. Moreno’s house, was the boy’s special education teacher.

She described him as a petite and frail child with curly hair who looked younger than most 7-year-olds. She said he was mostly unable to talk and struggled to make friends in his class, attended by other children with special needs. She said he often appeared hungry: His mother, she said, sent him to school with two or three chicken nuggets “at most.” She said she offered him goldfish snacks when he seemed to want more food. “We made sure he ate,” she said.

She said the boy had stopped attending school around the end of October. She spotted him on Halloween in the back of his mother’s vehicle and said she breathed a sigh of relief to see that he seemed to be OK.

The next time she heard about him, she learned that he had been shot at Lakewood Church.

J. David Goodman contributed reporting. Alain Delaquérière contributed research.

Edgar Sandoval covers Texas for The Times, with a focus on the Latino community and the border with Mexico. He is based in San Antonio. More about Edgar Sandoval

Share full article
Site Index
Site Information Navigation
© 2024 The New York Times Company
NYTCoContact UsAccessibilityWork with usAdvertiseT Brand StudioYour Ad ChoicesPrivacy PolicyTerms of ServiceTerms of SaleSite MapCanadaInternationalHelpSubscriptionsManage Privacy Preferences"""],
    n_results=2,
)
print(results)