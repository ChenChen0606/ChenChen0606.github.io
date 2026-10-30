interface TagRowProps {
  tags: string[];
}

export default function TagRow({ tags }: TagRowProps) {
  return (
    <div className="tag-row">
      {tags.map((tag) => (
        <span className="tag" key={tag}>
          {tag}
        </span>
      ))}
    </div>
  );
}
