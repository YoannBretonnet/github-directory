import { useState } from 'react';
import axios from 'axios';

import SearchBar from '../../SearchBar';
import Message from '../../Message';
import RepoResults from '../../RepoResults';

// == Composant
function SearchPage() {
  // un champ controlé pour ma recherche
  const [searchTerm, setSearchTerm] = useState('');
  // un tableau qui contiendra les repos
  const [repos, setRepos] = useState([]);
  // le nombre de résultats trouvés par l'api (si null => on n'a pas encore fait de requête)
  const [totalCount, setTotalCount] = useState(null);
  // un état pour définir si je suis en chargement ou non
  const [isLoading, setIsLoading] = useState(false);
  // un booléen indiquant si on a eu une erreur sur la requete
  const [hasError, setHasError] = useState(false);
  // la page en cours
  const [currentPage, setCurrentPage] = useState(1);

    // appelé lorsque on tape dans le champ controlé
    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };

  // appelé a la soumission du formulaire
  const handleSearchSubmit = () => {
 
    if (searchTerm === '') {
      return;
    } 
    else {
    setCurrentPage(1);
    setIsLoading(true);

    // je déclenche ma requête
    axios.get(`https://api.github.com/search/repositories?q=${searchTerm}&sort=stars&order=desc&page=${currentPage}&per_page=9`)
      .then((response) => {
        // lorsque la requete réussit, je vais stocker les résultats
        setRepos(response.data.items);
        setTotalCount(response.data.total_count);
        setHasError(false);
      })
      .catch((error) => {
        console.log('oups : ', error.message);    
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
    }
  };

  // récupérer la page suivante
  const handleLoadMoreRepos = () => {
    setIsLoading(true);

    setCurrentPage(currentPage + 1);

    // un + 1 dans mon url car setState est asynchrone
    axios.get(`https://api.github.com/search/repositories?q=${searchTerm}&sort=stars&order=desc&page=${currentPage + 1}&per_page=9`)
      .then((response) => {
        // je change mes repos
        setRepos([
          ...repos,
          ...response.data.items,
        ]);
        setIsLoading(false);
      });
  };

  const buildMessageText = () => {
    // si on a une erreur, je renvoie un message générique
    if (hasError) {
      return 'Une erreur est survenue, merci de réessayer plus tard';
    }

    // sinon, je fais mon ternaire par rapport au nombre de résultats
    return totalCount !== null
      ? `La recherche a donné ${totalCount} résultat(s)`
      : 'Utilisez le champ pour faire une recherche et validez avec entrée';
  };

  return (
    <div>
      {/*
      */}
      <SearchBar
        isLoading={isLoading}
        searchValue={searchTerm}
        onSearchChange={handleSearchChange}
        onSearchSubmit={handleSearchSubmit}
      />
      <Message
        isError={hasError}
        text={buildMessageText()}
      />
      <RepoResults
        repos={repos}
        isLoading={isLoading}
        onLoadMoreRepos={handleLoadMoreRepos}
      />
    </div>
  );
}

// == Export
export default SearchPage;
