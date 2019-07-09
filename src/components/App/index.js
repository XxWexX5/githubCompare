import React, { Component, Fragment } from "react";
import moment from "moment";

import api from "../../services/api";

import Global from "../../style/global";
import {
  StyleAppContent,
  StyleAppForm,
  StyleGeneralCompareList
} from "./style/StyleApp";

import logo from "../../assets/logo.png";

import CompareList from "../CompareList";

export default class App extends Component {
  state = {
    valueUserGithub: "",
    repository: [],
    errorConsultingApi: false,
    loading: false
  };

  componentDidMount() {
    if (localStorage.getItem("repository")) {
      return this.setState({
        repository: JSON.parse(localStorage.getItem("repository"))
      });
    }

    return null;
  }

  refreshRepository = () => {
    if (localStorage.getItem("repository")) {
      return localStorage.setItem(
        "repository",
        JSON.stringify(this.state.repository)
      );
    }

    return null;
  };

  updateRepository = async id => {
    const { data: repository } = await api.get(
      `/repos/${this.state.repository[id].full_name}`
    );

    this.state.repository[id] = repository;
    this.state.repository[id].lastCommit = moment(
      this.state.repository[id].updated_at
    ).fromNow();

    this.setState(
      {
        valueUserGithub: "",
        repository: [...this.state.repository],
        errorConsultingApi: false
      },
      this.refreshRepository
    );
  };

  deleteRepository = id => {
    return this.setState(
      {
        repository: this.state.repository.filter(
          repository => repository.id !== id
        )
      },
      this.refreshRepository
    );
  };

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({ loading: true });

    this.setState({
      repository: this.state.repository.filter(
        repository => repository.full_name !== this.state.valueUserGithub
      )
    });

    try {
      const { data: repository } = await api.get(
        `/repos/${this.state.valueUserGithub}`
      );

      repository.lastCommit = moment(repository.updated_at).fromNow();

      this.setState(
        {
          valueUserGithub: "",
          repository: [...this.state.repository, repository],
          errorConsultingApi: false
        },
        this.refreshRepository
      );
    } catch (error) {
      console.log(error);
      this.setState({ errorConsultingApi: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <Fragment>
        <Global />
        <StyleAppContent className="App">
          <img src={logo} alt="GitCompare" />

          <StyleAppForm
            withError={this.state.errorConsultingApi}
            onSubmit={this.handleSubmit}
          >
            <input
              type="text"
              placeholder="Digite um usuário do Github"
              value={this.state.valueUserGithub}
              onChange={e => this.setState({ valueUserGithub: e.target.value })}
            />
            <button type="submit">
              {this.state.loading ? (
                <i className="fa fa-spinner fa-pulse" />
              ) : (
                "+"
              )}
            </button>
          </StyleAppForm>

          {this.state.errorConsultingApi ? (
            <p className="label-error">Erro!</p>
          ) : (
            ""
          )}

          <StyleGeneralCompareList>
            <CompareList
              repository={this.state.repository}
              deleteRepository={this.deleteRepository}
              updateRepository={this.updateRepository}
            />
          </StyleGeneralCompareList>
        </StyleAppContent>
      </Fragment>
    );
  }
}
