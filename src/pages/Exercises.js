import React, { Component } from "react";
import AddButton from "../components/addButton";
import ExerciseList from "../components/ExerciseList";
import Welcome from "../components/Welcome";
import Loading from "../components/Loading";
import FatalError from "./500";

class Exercises extends Component {
  state = {
    data: [],
    loading: true,
    error: null,
  };

  async componentDidMount() {
    await this.fetchExercises();
  }

  fetchExercises = async () => {
    try {
      let res = await fetch("http://localhost:8000/api/exercises");
      let data = await res.json();
      this.setState({ data, loading: false });
    } catch (error) {
      this.setState({ loading: false, error });
    }
  };

  render() {
    if (this.state.loading) return <Loading />;
    if (this.state.error) return <FatalError />;

    return (
      <div>
        <Welcome username="Raul" />
        <ExerciseList exercises={this.state.data} />
        <AddButton />
      </div>
    );
  }
}

export default Exercises;
