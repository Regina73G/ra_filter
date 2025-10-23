// Главный компонент, который управляет логикой всего приложения. Он хранит в себе состояние (активный фильтр) и передаёт данные и функции дочерним компонентам.
import "./Portfolio.css"
import React from "react";
import { ProjectList } from "../ProjectList/ProjectList";
import { Toolbar } from "../Toolbar/Toolbar";

export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "All",
      projects: [
        {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
          category: "Business Cards"
        }, {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
          category: "Websites"
        }, {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
          category: "Websites"
        }, {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
          category: "Websites"
        }, {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
          category: "Business Cards"
        }, {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
          category: "Websites"
        }, {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
          category: "Websites"
        }, {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
          category: "Business Cards"
        }, {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
          category: "Websites"
        }, {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
          category: "Flayers"
        }, {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
          category: "Websites"
        }, {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
          category: "Business Cards"
        }, {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
          category: "Websites"
        }, {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
          category: "Websites"
        }, {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
          category: "Business Cards"
        }, {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
          category: "Websites"
        }, {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
          category: "Flayers"
        }
      ],
    };

    this.onSelectFilter = this.onSelectFilter.bind(this);
  }

  onSelectFilter(filter) {
    this.setState({selected: filter});
  }

  render() {
    const {selected, projects} = this.state;
    const uniqueCategories = Array.from(
      new Set(projects.map((project) => project.category))
    );
    const filters = ["All", ...uniqueCategories];

    const filteredProjects = selected === "All" ? projects : projects.filter((project) => project.category === selected);

    return(
      <div className="portfolio">
        <Toolbar 
          filters={filters} 
          selected={selected} 
          onSelectFilter={this.onSelectFilter} 
        />
        <ProjectList projects={filteredProjects} />
      </div>
    )
  }
}