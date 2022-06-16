import moment from "moment";


export const getExperience = (startDate, endDate) => {
  const validEndDate = (endDate === "Present")
    ? moment(new Date())
    : endDate;

  const mStartDate = moment(startDate);
  const mEndDate = moment(validEndDate);

  const startMonth = (mStartDate.year()*12) + mStartDate.month();
  const endMonth = (mEndDate.year()*12) + mEndDate.month();
  const monthInterval = (endMonth - startMonth + 1);

  const yearsOfExperience = Math.floor(monthInterval / 12);
  const monthsOfExperience = monthInterval % 12;
  const experience = {
    year: yearsOfExperience,
    month: monthsOfExperience
  }
  
  return experience;
}

export const getHostname = () => {
  const protocol = window.location.protocol;
  const host = window.location.host;
  const hostName = `${protocol}//${host}`;
  return hostName;
}

export const isNameValid = (name) => {
  return (name.length > 0)
    ? true
    : false;
};

export const isEmailValid = (email) => {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const isMessageValid = (message) => {
  return (message.length > 0)
    ? true
    : false;
};
