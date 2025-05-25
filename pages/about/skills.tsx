import styles from '@/styles/SkillsPage.module.css';
import { SkillSet } from '@/types';
import Image from 'next/image';

const SkillsPage = () => {
  const skillSet: SkillSet[] = [
    {
        title: "Programming",
        items: [
            {
                label: "Javascript",
                logo: "/logos/js_icon.svg"
            },
            {
                label: "Typesctipt",
                logo: "/logos/ts_icon.svg"
            },
            {
                label: "PHP",
                logo: "/logos/php_icon.svg"
            },
            {
                label: "Python",
                logo: "/logos/python_icon.svg"
            },
            {
                label: "C#",
                logo: "/logos/csharp_icon.svg"
            },
        ]
    },
    {
        title: "Full-Stack Development",
        items: [
            {
                label: "React",
                logo: "/logos/react_icon.svg"
            },
            {
                label: "Next.js",
                logo: "/logos/nextjs_logo.svg"
            },
            {
                label: "Laravel",
                logo: "/logos/laravel_logo.svg"
            },
            {
                label: "Node.js",
                logo: "/logos/nodejs_logo.svg"
            },
            {
                label: "Bootstrap",
                logo: "/logos/bootstrap_logo.svg"
            },
            {
                label: "SAAS",
                logo: "/logos/saas_logo.svg"
            }
        ]
    },
    {
        title: "Database",
        items: [
            {
                label: "SQL",
                logo: "/logos/sql_logo.svg"
            },
            {
                label: "MongoDB",
                logo: "/logos/mongodb_logo.svg"
            },
            {
                label: "Redis",
                logo: "/logos/redis_logo.svg"
            }
        ]
    },
    {
        title: "DevOps",
        items: [
            {
                label: "AWS",
                logo: "/logos/aws_logo.svg"
            },
            {
                label: "Firebase",
                logo: "/logos/firebase_logo.svg"
            },
            {
                label: "Git",
                logo: "/logos/git_logo.svg"
            },
            {
                label: "Github",
                logo: "/logos/github_logo_small.svg"
            },
            {
                label: "Docker",
                logo: "/logos/docker_logo.svg"
            },
        ]
    },
    {
        title: "Tools",
        items: [
            {
                label: "Visual Studio Code",
                logo: "/logos/vscode_icon_small.svg"
            },
            {
                label: "Postman",
                logo: "/logos/postman_logo.svg"
            },
            {
                label: "Jira",
                logo: "/logos/jira_logo.svg"
            }
        ]
    }
  ];

  return (
    <div className={styles.pageContainer}>
        <div className={styles.contentContainer}>
            <div className={styles.header}>
                <h2 className={styles.title}>
                    Skills
                </h2>
                <p className={styles.subtitle}>
                    Data Structures and Algorithms, Frontend Development, Backend
                    Development, Database Management, System Design and Cloud.
                </p>
            </div>

            <div className={styles.skillSetsContainer}>
                {skillSet?.map((skillSet) => (
                    <div key={skillSet.title} className={styles.skillSet}>
                        <h3>{skillSet.title}</h3>
                        <div className={styles.skillContainer}>
                            {skillSet?.items?.map((skill) => (
                                <div key={skill.label} className={styles.skillsContent}>
                                    <Image className={styles.skillLogo} src={skill.logo} alt={skill.label} height={100} width={100}/>
                                    <p>{skill.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {/* <div className="mt-5">
                <p className="mt-2  tracking-tight text-gray-400 text-xl">
                    Programming
                </p>
                <dl className="space-y-10 mt-4 md:space-y-0 md:grid md:grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 md:gap-x-8 md:gap-y-10">
                    <div className="relative">
                    <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white">
                        <Image src="https://img.icons8.com/color/144/000000/javascript--v1.png" alt='' height={100} width={100}/>
                        </div>
                        <p className="ml-16 text-lg leading-6 font-medium pt-3 text-gray-100">
                        JavaScript
                        </p>
                    </dt>
                    </div>
                    <div className="relative">
                    <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white">
                        <Image src="https://img.icons8.com/color/96/000000/typescript.png" alt='' height={100} width={100}/>
                        </div>
                        <p className="ml-16 text-lg leading-6 font-medium pt-3 text-gray-100">
                        TypeScript
                        </p>
                    </dt>
                    </div>
                    <div className="relative">
                    <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white">
                        <Image src="https://img.icons8.com/color/48/null/python--v1.png" alt='' height={100} width={100}/>
                        </div>
                        <p className="ml-16 text-lg leading-6 font-medium pt-3 text-gray-100">
                        Python
                        </p>
                    </dt>
                    </div>
                </dl>
                </div>

                <div className="mt-5 pt-5">
                <p className="mt-2  tracking-tight text-gray-400 text-xl">
                    Full-Stack Development
                </p>
                <dl className="space-y-10 mt-4 md:space-y-0 md:grid md:grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 md:gap-x-8 md:gap-y-10">
                    <div className="relative">
                    <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white">
                        <Image
                            alt='' height={100} width={100}
                            src="https://img.icons8.com/color/144/000000/react-native.png"
                        />
                        </div>
                        <p className="ml-16 text-lg leading-6 font-medium pt-3 text-gray-100">
                        React
                        </p>
                    </dt>
                    </div>
                    <div className="relative">
                    <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white">
                        <Image src="https://img.icons8.com/fluency/144/000000/node-js.png" alt='' height={100} width={100}/>
                        </div>
                        <p className="ml-16 text-lg leading-6 font-medium pt-3 text-gray-100">
                        Node.js
                        </p>
                    </dt>
                    </div>
                    <div className="relative">
                    <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white">
                        <Image src="https://i.ibb.co/Kj1TqRv/image.png" alt='' height={100} width={100}/>
                        </div>
                        <p className="ml-16 text-lg leading-6 font-medium pt-3 text-gray-100">
                        Next.js
                        </p>
                    </dt>
                    </div>
                    <div className="relative">
                    <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white">
                        <Image src="https://bourhaouta.gallerycdn.vsassets.io/extensions/bourhaouta/tailwindshades/0.0.5/1592520164095/Microsoft.VisualStudio.Services.Icons.Default" alt='' height={100} width={100}/>
                        </div>
                        <p className="ml-16 text-lg leading-6 font-medium pt-3 text-gray-100">
                        Tailwind
                        </p>
                    </dt>
                    </div>
                    <div className="relative">
                    <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white">
                        <Image src="https://img.icons8.com/color/144/000000/bootstrap.png" alt='' height={100} width={100}/>
                        </div>
                        <p className="ml-16 text-lg leading-6 font-medium pt-3 text-gray-100">
                        Bootstrap
                        </p>
                    </dt>
                    </div>
                    <div className="relative">
                    <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white">
                        <Image src="https://img.icons8.com/color/144/000000/sass.png" alt='' height={100} width={100}/>
                        </div>
                        <p className="ml-16 text-lg leading-6 font-medium pt-3 text-gray-100">
                        SASS
                        </p>
                    </dt>
                    </div>
                    <div className="relative">
                    <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white">
                        <Image
                            src="https://img.icons8.com/ios-filled/150/000000/jquery.png"
                            alt='' height={100} width={100}
                        />
                        </div>
                        <p className="ml-16 text-lg leading-6 font-medium pt-3 text-gray-100">
                        JQuery
                        </p>
                    </dt>
                    </div>
                </dl>
                </div>

                <div className="mt-5 pt-5">
                <p className="mt-2  tracking-tight text-gray-400 text-xl">
                    Database
                </p>
                <dl className="space-y-10 mt-4 md:space-y-0 md:grid md:grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 md:gap-x-8 md:gap-y-10">
                    <div className="relative">
                    <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white">
                        <Image src="https://img.icons8.com/ios-filled/100/000000/sql.png" alt='' height={100} width={100}/>
                        </div>
                        <p className="ml-16 text-lg leading-6 font-medium pt-3 text-gray-100">
                        SQL
                        </p>
                    </dt>
                    </div>
                    <div className="relative">
                    <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white">
                        <Image src="https://img.icons8.com/color/48/null/redis.png" alt='' height={100} width={100} />
                        </div>
                        <p className="ml-16 text-lg leading-6 font-medium pt-3 text-gray-100">
                        Redis
                        </p>
                    </dt>
                    </div>
                    <div className="relative">
                    <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white">
                        <Image src="https://img.icons8.com/color/48/null/postgreesql.png" alt='' height={100} width={100}/>
                        </div>
                        <p className="ml-16 text-lg leading-6 font-medium pt-3 text-gray-100">
                        PostgresSQL
                        </p>
                    </dt>
                    </div>
                    <div className="relative">
                    <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white">
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Cassandra_logo.svg/1200px-Cassandra_logo.svg.png" alt='' height={100} width={100}/>
                        </div>
                        <p className="ml-16 text-lg leading-6 font-medium pt-3 text-gray-100">
                        Cassandra
                        </p>
                    </dt>
                    </div>
                    <div className="relative">
                    <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white">
                        <Image src="https://img.icons8.com/color/48/000000/mongodb.png" alt='' height={100} width={100}/>
                        </div>
                        <p className="ml-16 text-lg leading-6 font-medium pt-3 text-gray-100">
                        MongoDB
                        </p>
                    </dt>
                    </div>
                </dl>
                </div>

                <div className="mt-5 pt-5">
                <p className="  tracking-tight text-gray-400 text-xl">DevOps</p>
                <dl className="space-y-10 mt-4 md:space-y-0 md:grid md:grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 md:gap-x-8 md:gap-y-10">
                    <div className="relative">
                    <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white">
                        <Image
                            src="https://img.icons8.com/color/144/000000/amazon-web-services.png"
                            alt='' height={100} width={100}
                        />
                        </div>
                        <p className="ml-16 text-lg leading-6 font-medium pt-3 text-gray-100">
                        AWS
                        </p>
                    </dt>
                    </div>
                    <div className="relative">
                    <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white">
                        <Image
                            src="https://i.ibb.co/CnLsjhp/download.png"
                            alt='' height={100} width={100}
                        />
                        </div>
                        <p className="ml-16 text-lg leading-6 font-medium pt-3 text-gray-100">
                        Cloudflare
                        </p>
                    </dt>
                    </div>
                    <div className="relative">
                    <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white">
                        <Image src="https://img.icons8.com/color/144/000000/git.png" alt='' height={100} width={100}/>
                        </div>
                        <p className="ml-16 text-lg leading-6 font-medium pt-3 text-gray-100">
                        Git
                        </p>
                    </dt>
                    </div>
                    <div className="relative">
                    <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white">
                        <Image
                            src="https://img.icons8.com/fluency/144/000000/github.png"
                            alt='' height={100} width={100}
                        />
                        </div>
                        <p className="ml-16 text-lg leading-6 font-medium pt-3 text-gray-100">
                        GitHub
                        </p>
                    </dt>
                    </div>
                    <div className="relative">
                    <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white">
                        <Image
                            src="https://img.icons8.com/color/144/000000/bitbucket.png"
                            alt='' height={100} width={100}
                        />
                        </div>
                        <p className="ml-16 text-lg leading-6 font-medium pt-3 text-gray-100">
                        Bitbucket
                        </p>
                    </dt>
                    </div>
                    <div className="relative">
                    <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white">
                        <Image
                            src="https://img.icons8.com/color/144/000000/azure-1.png"
                            alt='' height={100} width={100}
                        />
                        </div>
                        <p className="ml-16 text-lg leading-6 font-medium pt-3 text-gray-100">
                        Azure App Service
                        </p>
                    </dt>
                    </div>
                </dl>
                </div>

                <div className="mt-5 pt-5">
                <p className="  tracking-tight text-gray-400 text-xl">Tools</p>
                <dl className="space-y-10 mt-4 md:space-y-0 md:grid md:grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 md:gap-x-8 md:gap-y-10">
                    <div className="relative">
                    <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white">
                        <Image
                            src="https://img.icons8.com/fluency/144/000000/visual-studio-code-2019.png" 
                            alt='' height={100} width={100}
                        />
                        </div>
                        <p className="ml-16 text-lg leading-6 font-medium pt-3 text-gray-100">
                        Visual Studio Code
                        </p>
                    </dt>
                    </div>
                    <div className="relative">
                    <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white">
                        <Image
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTILwHh21Dky51ePyPy2V_qsPeQWd5n136Sa8PQuhIMmOGLpprK6Zt7qWn9cRL21LE3RzM&usqp=CAU"
                            alt='' height={100} width={100}
                        />
                        </div>
                        <p className="ml-16 text-lg leading-6 font-medium pt-3 text-gray-100">
                        Postman
                        </p>
                    </dt>
                    </div>
                    <div className="relative">
                    <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white">
                        <Image
                            src="https://img.icons8.com/color/144/000000/jira.png"
                            alt='' height={100} width={100}
                        />
                        </div>
                        <p className="ml-16 text-lg leading-6 font-medium pt-3 text-gray-100">
                        JIRA
                        </p>
                    </dt>
                    </div>
                </dl>
                </div> */}
            </div>
        </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Skills' },
  };
}

export default SkillsPage;
