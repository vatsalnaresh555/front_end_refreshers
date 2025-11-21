import type { ReactNode } from "react";

type CardListProps<T> = {
  items: T[];
  renderCard: (item: T) => ReactNode; // 👈 THIS must exist
};

export function CardListGeneric<T>({ items, renderCard }: CardListProps<T>) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      {items.map((item, index) => (
        <div key={index}>{renderCard(item)}</div>
      ))}
    </div>
  );
}
