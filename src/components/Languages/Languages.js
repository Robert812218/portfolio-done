import React from 'react';
import './Languages.css';

export default function Languages() {


    // icons from https://devicon.dev
    const data = [

        { item: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { item: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { item: "Javascript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { item: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { item: "Typescript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { item: "Elixir", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elixir/elixir-original.svg" },
        { item: "Phoenix", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/phoenix/phoenix-original.svg" },
        { item: "Rust", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg" },
        { item: "ClojureScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/clojurescript/clojurescript-original.svg"  },
        { item: "Clojure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/clojure/clojure-original.svg"  },
        { item: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"  },
        { item: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg"  },
        { item: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"  },
        { item: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"  },
        { item: "Ruby", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg"  },
        { item: "Rails", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg"  },
        // { item: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"  },
        // { item: ".NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg"  },
        { item: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"  },
        { item: "Vim", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg"  },
        { item: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"  },
        { item: "Github", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"  },
        { item: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },    
        { item: "Blender", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg"  },
        { item: "SASS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"  },
        { item: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"  },
        { item: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
        { item: "Android Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" },
        { item: "Erlang", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/erlang/erlang-original-wordmark.svg" },
        { item: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" },
        { item: "Npm", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" },
        
    ]

    for (let i = 0; i < data.length; i++) {
        data[i].id = i;
    }


    function mapLangs(arr) {
        return (
            arr.map((lang) => (
                    <div className="langs-slider-item">
                       <div style={{
                           backgroundImage: `url("${lang.icon}")`,
                           backgroundPosition: "center",
                           backgroundSize: "cover",
                           backgroundRepeat: "no-repeat",
                           width: "3rem",
                           height: "3rem",
                        }}></div>
                        <h6 className="slider-title">
                            {lang.item}
                        </h6>
                    </div>
            ))
        )
    }

    let len = data.length / 3;
    let row1 = data.slice(0, len);
    let row2 = data.slice(len, len * 2);
    let row3 = data.slice(len * 2);


    return (
        <div className="languages-container">
            <h1 className="languages-header">Languages, Frameworks and Technologies</h1>
            <div style={{
                display: "flex",
                flexDirection: "row",
            }}>
                <button><a href="#projects">Projects &darr;</a></button>
                <button><a href="#contact">Contact &darr;</a></button>
                <button><a href="#footer">Socials &darr;</a></button>
            </div>


            <div className="langs-slider-containers">
                <div className="langs-slider-icons">
                    <div>
                        {mapLangs(row1)}
                    </div>
                    <div>
                        {mapLangs(row2)}
                    </div>
                    <div>
                        {mapLangs(row3)}
                    </div>
                </div>
                {/* <div className="langs-slider-buttons">
                   {data.map((lang) => (
                        <button className="dot">
                            {lang.id}
                            {lang.item}
                        </button>
                    ))}
                </div> */}
                
            </div>
        </div>
    );
}

