import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "aqua",
  },
  {
    skill: "Javascript",
    level: "advanced",
    color: "orange",
  },
  {
    skill: "Web Design",
    level: "intermediate",
    color: "yellow",
  },
  {
    skill: "Git and GitHub",
    level: "advanced",
    color: "red",
  },
  {
    skill: "React",
    level: "beginner",
    color: "green",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="Avatar.jpg" />;
}

function Intro() {
  return (
    <div>
      <h2>Steven Xue</h2>
      <p>
        Experienced full-stack developer with a passion for building scalable
        web applications. Skilled in .NET, Angular, and cloud technologies.
        Enthusiastic about continuous learning and delivering impactful digital
        solutions.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {/* {skills.map((skill) => 
        <Skill skillObj={skill} />;
      )} */}

      {skills.map((skill) => (
        <Skill
          skill={skill.skill}
          color={skill.color}
          level={skill.level}
          key={skill.skill}
        />
      ))}

      {/* <Skill name="HTML+CSS" emoji="&#128077;" color="red" />
      <Skill name="Javascript" emoji="&#128077;" color="orange" />
      <Skill name="Web Design" emoji="&#128076;" color="green" />
      <Skill name="Git and GitHub" emoji="&#9996;" color="yellow" />
      <Skill name="React" emoji="&#128077;" color="green" />
      <Skill name="Svelte" emoji="&#129311;" color="orange" /> */}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <span className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👌"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </span>
  );
}

export default App;
