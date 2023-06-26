import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarHeader from './AppBar/AppBar';
import Search from './SearchBar/SearchBar';



export const App = () => {
  return (
    <div>
      <MuiThemeProvider>
        <div>
          <AppBarHeader />
          <Search />
        </div>
      </MuiThemeProvider>
    </div>
  );
};
