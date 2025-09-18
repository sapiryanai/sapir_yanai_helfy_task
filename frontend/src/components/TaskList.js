import { useRef, useEffect, useState } from "react";
import TaskItem from "./TaskItem";
import "../styles/TaskList.css";

export default function TaskList({ tasks, onDelete, onToggle, onEdit }) {
  const carouselRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationFrame;

    const step = () => {
      if (!isHovered) {
      
        carousel.scrollTop += 1;

       
        if (carousel.scrollTop >= carousel.scrollHeight - carousel.clientHeight) {
          carousel.scrollTop = 0;
        }
      }
      animationFrame = requestAnimationFrame(step);
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [isHovered, tasks]);

  return (
    <div
      className="carousel-wrapper"
      ref={carouselRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ overflowY: "auto", maxHeight: "800px" }} 
    >
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}
