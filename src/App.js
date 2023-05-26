import './App.css';

import {useState} from 'react'

function FQAItem({ title, desc }) {
    const [isActiveIcon, setIsActiveIcon] = useState(false)
    const icon = isActiveIcon ? '-' : '+' 

    function handleClick() {
        setIsActiveIcon(!isActiveIcon)
    }
    if (isActiveIcon) {
        return (
            <div className="fqa-item">
                <div className="item-head">
                    <h3 className="item-title">{title}</h3>
                    <div className="item-icon" onClick={handleClick}>{icon}</div>
                </div>
                <p className="item-desc">{desc}</p>
            </div>
        )
    } else {
        return (
            <div className="fqa-item">
                <div className="item-head">
                    <h3 className="item-title">{title}</h3>
                    <div className="item-icon" onClick={handleClick}>{icon}</div>
                </div>
            </div>
        )
    }
}

function TableTitle({ title }) {
    return <h2 className="fqa-title">{title}</h2>
}

function FAQTable({ questionslist }) {
    const List = []
    questionslist.forEach((question) => List.push(<FQAItem key={question.id} title={question.title} desc={question.info} />))
    
    return (
        <div className="fqa-table">
            <TableTitle title='Frequently Asked Questions' />
            {List}
        </div>
    )
}

function ProjectName({name}) {
    return <h1 className="project-name">{name}</h1>
}

function FQA() {
    return (
        <div className="fqa">
            <ProjectName name='Project 2: FAQ/Accordion' />
            <FAQTable questionslist={questions} />
        </div>
    )
}


const questions = [
    {
        id: 1,
        title: "Is this a good product?",
        info:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
    },
    {
        id: 2,
        title: "How much does it cost?",
        info:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
    },
    {
        id: 3,
        title: "When can I get it?",
        info:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
    }
]

function App() {
  return (
    <div className="App">
      <FQA />
    </div>
  );
}

export default App;
