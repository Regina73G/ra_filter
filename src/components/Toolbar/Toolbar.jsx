// Отвечает за отображение панели с кнопками-фильтрами. Получает список фильтров, информацию о выбранном фильтре и функцию для обработки клика.
import "./Toolbar.css";

export function Toolbar({filters, selected, onSelectFilter}) {
  return (
    <div className="toolbar">
      {filters.map((filter) => (
        <button 
          className={filter === selected ? "filter filter--active" : "filter"} 
          key={filter} 
          onClick={() => onSelectFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  )
}