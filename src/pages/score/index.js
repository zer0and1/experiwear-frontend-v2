import { Layout, Score, CurrentFanbandStats, AlertsSent } from 'components';
import { usePathIndicator } from 'hooks';
import { ALERT_TYPES, LINKS } from 'utils/constants';

export default function ScorePage() {
  usePathIndicator({ path: LINKS.score.path, label: LINKS.score.title });

  return (
    <Layout
      sidebar={
        <>
          <CurrentFanbandStats />
          <AlertsSent
            type={ALERT_TYPES.SCORE.VALUE}
            link={LINKS.scoreSent.path}
          />
        </>
      }
    >
      <Score />
    </Layout>
  );
}
