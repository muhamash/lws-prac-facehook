export const getPostTime = (fromPost) => {
  let difference = new Date().getTime() - new Date(fromPost).getTime();

  difference = difference / 1000;
  const years = Math.floor(difference / (3600 * 24 * 365));
  difference -= years * 3600 * 24 * 365;
  const days = Math.floor(difference / (3600 * 24));
  difference -= days * 3600 * 24;
  const hours = Math.floor(difference / 3600);
  difference -= hours * 3600;
  const minutes = Math.floor(difference / 60);
  difference -= minutes * 60;
  const seconds = Math.floor(difference);

  let message = '';

  if (years > 0) {
    message = years === 1 ? `${years} year` : `${years} years`;
  } else if (days > 0) {
    message = days === 1 ? `${days} day` : `${days} days`;
  } else if (hours > 0) {
    message = hours === 1 ? `${hours} hour` : `${hours} hours`;
  } else if (minutes > 0) {
    message = minutes === 1 ? `${minutes} minute` : `${minutes} minutes`;
  } else if (seconds > 0) {
    message = seconds === 1 ? `${seconds} second` : `${seconds} seconds`;
  } else {
    message = 'just now';
  }

  return message;
};
