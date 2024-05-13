//string_dict

const str_dict = [
  {
    id: "0",
    msg: "Roley Me",
    link: "https://roley.me",
    projects: [
      {
        name: "Marketing Funnel",
        description: [
          "This summer we are are marketing Roley.",
          "We need to get as many aactors aware of Roley.",
          "Incentives for every actor sign up.",
          "Big incentives for selling to acting agencies.",
          "Consider joining if you want to build a marketing funnel.",
          "Or if you want to work on branding and identity.",
          "If you do a good job and would like to continue, equity options are possible.",
        ],
      },
    ],
  },
  {
    id: "1",
    msg: "Bucket Foundation",
    link: "https://bucket.foundation",
    projects: [
      {
        name: "Liberia Project: CIMS",
        description: [
          "This summer we are putting in a proposal to build the country of Liberia a Concessions Information Management System.",
          "We may partner with a more experienced governemnt contractor to have a competative bid.",
          "This is a massive project, we need more experienced software developers for this.",
        ],
      },
      {
        name: "Liberia Project: Fashion",
        description: [
          "This summer we are putting in a proposal to manufacture and export textiles and fashion clothes in Liberia.",
          "We have designers designing US-Liberia Cross clothes, contact if you are designer and want to make some designs too.",
          "We plan to sell on an online store, for now the bucket website.",
          "Join if you are interested in marketing and want to brand and market these products.",
        ],
      },
      {
        name: "Polymathic Skool",
        description: [
          "The purpose of the Bucket Foundation is to reform the Education Industry.",
          "We've found a great way to begin tackling this goal with Skool.",
          "https://Skool.com is a platform that provides community, schedule, and courses in a monthly membership platform.",
          "Polymathic Skool will be one free SKool with Introduction Courses to many diffenret topics.",
          "We will market this Skool and drive as many users that have a polymathic learning passion into this Free Skool.",
          "Then poll the demand for a certain topic, find an online teacher that can satisfy that learning demand and plug their paid Skool inot our free Skool.",
          "If you are an aspiring Polymath, you should join the Skool.",
          "If you want to make money, get users into the Skool and find a teacher to build a Skool for.",
        ],
      },
    ],
  },
  {
    id: "2",
    msg: "AGFarms",
    link: "https://agfarms.dev",
    projects: [
      {
        name: "Walleye Project",
        description: [
          "We built a software for Virtual Fishing Tourmnaments",
          "Ticketing with Stripe, Emails with Zoho Zepto, Webapp with NextJS, React.",
          "We handled 900 users ticket purchases and fishing activity during the tournament.",
          "We user portal to see leaderboards, fish submissions, and ability to submit fish.",
          "The admin portal allowed admins to submit fish for users and review submitted fish.",
          "We are continuing to work on the Project with Walleyefest LLC.",
          "If interested, we want to expand this software to work for any community Derby.",
        ],
      },
    ],
  },
];
// let str_dict =

export default function Component({ id }: { id: number }) {
  return (
    <div>
      <div className="flex w-2/3 m-auto h-2/3 p-auto justify-content align-center">
        <a href={str_dict[id].link} target="_blank">
          <div className="main_button">{str_dict[id].msg}</div>
        </a>
      </div>
      <div>
        {str_dict[id].projects.map((project) => {
          return (
            <div>
              <div className="p-4">
                <div className="m-4 font-bold title">
                  <p className="title-button">{project.name}</p>
                </div>
              </div>
              {project.description.map((line) => {
                return <li className="line bg-opacity-90">{line}</li>;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
