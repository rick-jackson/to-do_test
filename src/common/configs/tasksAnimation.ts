export const tasksAnimationsConfig = {
  from: { opacity: 0, transform: "translateX(100%)", transition: "0.3s" },
  enter: { opacity: 1, transform: "translateX(0%)", transition: "0.3s" },
  leave: {
    opacity: 0,
    transform: "translateX(100%)",
    transition: "0.3s",
    height: 0,
  },
  config: { duration: 500, friction: 10, tension: 400 },
  unique: true,
  trail: 50,
};
