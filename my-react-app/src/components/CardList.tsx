import type { ReactNode } from "react";
type CardListProps<T> = {
    items: T[];
    renderItem: (item: T) => ReactNode;
}

export function CardList<T>({items,renderItem}:CardListProps<T>) {
    return (
        <div>
            {items.map((item,index)=>(
                <div key={index} style={{marginBottom:"12px"}}>
                    {renderItem(item)}
                </div>
            ))}
        </div>
    );
}