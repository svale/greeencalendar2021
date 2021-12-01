import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  remote: 'staging',
  repo: 'https://github.com/svale/greeencalendar2021.git',
  // repo: 'https://github.com/netliferesearch/klodekalenderen',
  user: {
   name: 'Svale', // update to use your name
   email: 'svale.fossaskaret@netlife.com' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);