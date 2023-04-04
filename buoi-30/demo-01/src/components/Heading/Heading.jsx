export default function Heading({ name, age, course, color }) {
  return (
    <h1
      style={{
        color: color,
      }}
    >
      Welcome {name} {age} years old to my {course.toUpperCase()} class
    </h1>
  );
}
