import React, { useEffect } from "react";
import "./Timeline.css"; // Import CSS for styling

const timelineData = [
  {
    imgSrc: "https://www.figma.com/community/resource/f876490c-7afe-412b-903f-9edd17c2fa06/thumbnail",
    title: "Danish toffee marzipan chocolate",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, est.",
  },
  {
    imgSrc: "https://cdn.dribbble.com/userupload/28418931/file/original-e1e7d08d0f3f14001808c75128bddf92.jpg?resize=752x&vertical=center",
    title: "Belgian chocolate delight",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, est.",
  },
  {
    imgSrc: "https://repository-images.githubusercontent.com/480011548/a04d4c0f-bd29-4783-b8dc-dd6c600482e8",
    title: "Sweet caramel indulgence",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, est.",
  },
  {
    imgSrc: "https://repository-images.githubusercontent.com/480011548/a04d4c0f-bd29-4783-b8dc-dd6c600482e8",
    title: "Sweet caramel indulgence",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, est.",
  },
];

const Timeline = () => {
  useEffect(() => {
    const timelineItems = document.querySelectorAll(".timeline-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(index % 2 === 0 ? "slide-in-left" : "slide-in-right");
            entry.target.classList.add("active");

            // Blur first item when the second one appears
            if (index === 1) {
              timelineItems[0].classList.add("blur");
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    timelineItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="main">
      <ul className="timeline">
        {timelineData.map((item, index) => (
          <li key={index} className="timeline-item">
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <img src={item.imgSrc} alt="Timeline Item" className="item-img" />
              <p>{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
