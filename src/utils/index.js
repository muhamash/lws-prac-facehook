export const getPostTime = (fromPost) => {
  let difference = new Date().getTime() - new Date(fromPost).getTime();

  difference = difference / 1000; // convert difference to seconds
  const hours = Math.floor(difference / 3600);
  difference -= hours * 3600;
  const minutes = Math.floor(difference / 60);
  difference -= minutes * 60;
  const seconds = Math.floor(difference);

  let message = '';

  if (hours > 0) {
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
