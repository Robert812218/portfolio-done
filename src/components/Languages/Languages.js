import React, { useState, useFetch } from 'react';
import './Languages.css';




    

export default function Languages() {
    const data = [

        { item: "HTML", icon: "" },
        { item: "CSS", icon: "" },
        { item: "Javascript", icon: "" },
        { item: "React.js", icon: "" },
        { item: "Typescript", icon: "" },
        { item: "Elixir", icon: "" },
        { item: "Phoenix", icon: ""    },
        { item: "ClojureScript", icon: ""  },
        { item: "Reagent", icon: ""  },
        { item: "Flutter", icon: ""  },
        { item: "Dart", icon: ""  },
        { item: "Python", icon: ""  },
        { item: "Django", icon: ""  },
        { item: "Ruby", icon: ""  },
        { item: "Rails", icon: ""  },
        { item: "C#", icon: ""  },
        { item: ".NET", icon: ""  },
        { item: "SQL", icon: ""  },
        { item: "PostgreSQL", icon: ""  },
        { item: "Vim", icon: ""  },
        { item: "Git", icon: ""  },
        { item: "Github", icon: ""  },
        { item: "Blender", icon: ""  },
        { item: "SASS", icon: ""  },
        { item: "Express.js", icon: ""  },
    ]

    const dataItems = data.map((lang) => 
        <div key={lang.toString()}>
            {lang.item}
        </div>
    )
    

    return (
        <div>
            {data.map((lang) => {
                return lang.item;
            })}
        </div>
    );
}

