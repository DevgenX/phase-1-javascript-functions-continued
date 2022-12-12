// code your solution here

const saturdayFun = (arg = "roller-skate") => {
  return `This Saturday, I want to ${arg}!`;
};

const mondayWork = (arg = "go to the office") => {
  return `This Monday, I will ${arg}.`;
};

const wrapAdjective = (str = "*") => {
  return (arg = "special") => {
    return `You are ${str}${arg}${str}!`;
  };
};
