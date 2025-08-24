//"Hello World"(print)
import React from "react";
import skills from "../../skills";

const Skills_card = () => {
  const outerSkills = skills.slice(0, 6);
  const innerSkills = skills.slice(6, 12);

  const getIconStyle = (index, total, radius) => {
    const iconSize = 50;
    const angle = (360 / total) * index;
    return {
      position: "absolute",
      top: "50%",
      left: "50%",
      width: `${iconSize}px`,
      height: `${iconSize}px`,
      transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
      transformOrigin: "0 0",
      marginTop: `-${iconSize / 2}px`,
      marginLeft: `-${iconSize / 2}px`,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    };
  };

  return (
    <div className="relative h-[650px] min-w-max mt-5 ml-35 backdrop-blur-2xl flex justify-between">
      <div className="" style={{ width: 300, height: 300 }}>
        {/* Outer circle */}
        <div
          className="absolute animate-rotate-slow rounded-full border border-gray-500"
          style={{
            width: 500,
            height: 500,
            transform: "translate(-50%, -50%)",
          }}
          >
          <div className="relative w-full h-full">
            {outerSkills.map((skill, i) => (
              <div key={i} style={getIconStyle(i, outerSkills.length,249)}>
                <img
                  src={skill.iconUrl}
                  alt={skill.name}
                  title={skill.name}
                  style={{ width: 30, height: 30 }}
                  />
              </div>
            ))}
          </div>
        </div>

        {/* Inner circle */}
        <div
          className="absolute animate-rotate-slower rounded-full border border-gray-500 "
          style={{
            width: 400,
            height: 400,
            top:"8%",
            left:"4%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="relative w-full h-full">
            {innerSkills.map((skill, i) => (
              <div key={i} style={getIconStyle(i, innerSkills.length, 200)}>
                <img
                  src={skill.iconUrl}
                  alt={skill.name}
                  title={skill.name}
                  style={{ width: 30, height: 30,fontStyle:"bold" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mr-30">
        <img src="/luffy_hi.gif" height="300" width="300" alt="" />
      </div>
    </div>

  );
};

export default Skills_card;
