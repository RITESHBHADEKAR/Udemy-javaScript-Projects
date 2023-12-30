const paginate = (followers) => {
  const itemsperpage = 10;
  const numberofPages = Math.ceil(followers.length / itemsperpage);

  const newfollowers = Array.from({ length: numberofPages }, (_, index) => {
    const start = index * itemsperpage;
    return followers.slice(start, start + itemsperpage);
  });
  return newfollowers;
};

export default paginate;
