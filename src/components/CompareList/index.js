import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { StyleCompareList } from "./style/StyleCompareList";

const CompareList = ({ repository, deleteRepository, updateRepository }) => (
  <Fragment>
    {repository.map((repository, id) => (
      <StyleCompareList key={id}>
        <header>
          <img src={repository.owner.avatar_url} alt={repository.full_name} />
          <h3>{repository.name}</h3>
          <small>{repository.owner.login}</small>
        </header>

        <ul>
          <li>
            <p>{repository.stargazers_count}</p>
            <small>stars</small>
          </li>
          <li>
            <p>{repository.forks_count}</p>
            <small>forks</small>
          </li>
          <li>
            <p>{repository.open_issues_count}</p>
            <small>issues</small>
          </li>
          <li>
            <p>{repository.lastCommit}</p>
            <small>last commit</small>
          </li>
        </ul>

        <div className="group-button">
          <button
            className="btn btn-refresh"
            onClick={updateRepository.bind(this, id)}
          >
            atualizar
          </button>
          <button
            className="btn btn-danger"
            onClick={deleteRepository.bind(this, repository.id)}
          >
            deletar
          </button>
        </div>
      </StyleCompareList>
    ))}
  </Fragment>
);

CompareList.propTypes = {
  repository: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      full_name: PropTypes.string,
      stargazers_count: PropTypes.number,
      forks_count: PropTypes.number,
      open_issues_count: PropTypes.number,
      updated_at: PropTypes.string,
      owner: PropTypes.shape({
        avatar_url: PropTypes.string,
        login: PropTypes.string
      })
    })
  ).isRequired
};

export default CompareList;
