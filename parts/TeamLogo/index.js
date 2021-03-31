import { memo } from 'react'
import * as NBAIcons from 'react-nba-logos'

const TeamLogo = ({
  size = 30,
  team
}) => {

  switch (team) {
    case 'ATL':
      return <NBAIcons.ATL size={size} />
    case 'BKN':
      return <NBAIcons.BKN size={size} />
    case 'BOS':
      return <NBAIcons.BOS size={size} />
    case 'CHA':
      return <NBAIcons.CHA size={size} />
    case 'CHI':
      return <NBAIcons.CHI size={size} />
    case 'CLE':
      return <NBAIcons.CLE size={size} />
    case 'DAL':
      return <NBAIcons.DAL size={size} />
    case 'DEN':
      return <NBAIcons.DEN size={size} />
    case 'DET':
      return <NBAIcons.DET size={size} />
    case 'GSW':
      return <NBAIcons.GSW size={size} />
    case 'HOU':
      return <NBAIcons.HOU size={size} />
    case 'IND':
      return <NBAIcons.IND size={size} />
    case 'LAC':
      return <NBAIcons.LAC size={size} />
    case 'LAL':
      return <NBAIcons.LAL size={size} />
    case 'MEM':
      return <NBAIcons.MEM size={size} />
    case 'MIA':
      return <NBAIcons.MIA size={size} />
    case 'MIL':
      return <NBAIcons.MIL size={size} />
    case 'MIN':
      return <NBAIcons.MIN size={size} />
    case 'NOP':
      return <NBAIcons.NOP size={size} />
    case 'NYK':
      return <NBAIcons.NYK size={size} />
    case 'OKC':
      return <NBAIcons.OKC size={size} />
    case 'ORL':
      return <NBAIcons.ORL size={size} />
    case 'PHI':
      return <NBAIcons.PHI size={size} />
    case 'PHX':
      return <NBAIcons.PHX size={size} />
    case 'POR':
      return <NBAIcons.POR size={size} />
    case 'SAC':
      return <NBAIcons.SAC size={size} />
    case 'SAS':
      return <NBAIcons.SAS size={size} />
    case 'TOR':
      return <NBAIcons.TOR size={size} />
    case 'UTA':
      return <NBAIcons.UTA size={size} />
    case 'WAS':
      return <NBAIcons.WAS size={size} />
    default:
      return <NBAIcons.ATL size={size} />
  }
};

export default memo(TeamLogo);