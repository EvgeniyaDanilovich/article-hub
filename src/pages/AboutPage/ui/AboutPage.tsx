import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Client } from '@elastic/elasticsearch';

// const client = new Client({
//     node: 'https://f1c4a98ce5224045a23f35b36a04091c.us-central1.gcp.cloud.es.io',
//     auth: { apiKey: 'eDNiNFI0b0JEYXRWYWpqeTlOd0s6dkx5anZ5TE5SRnU5b3pRLXVrWUROdw==' },
// });

// const client = new Client({
//     // node: 'https://f1c4a98ce5224045a23f35b36a04091c.us-central1.gcp.cloud.es.io',
//     // cloud: {
//     //     // eslint-disable-next-line max-len
//     //     id: 'test-youtube-search:dXMtY2VudHJhbDEuZ2NwLmNsb3VkLmVzLmlvOjQ0MyRmMWM0YTk4Y2U1MjI0MDQ1YTIzZjM1YjM2YTA0MDkxYyRjNjEzOWQxNTU1YWM0MzVhOWM3NjQ1YjEzMDYzNmYwOQ==',
//     // },
//     // auth: { apiKey: 'eDNiNFI0b0JEYXRWYWpqeTlOd0s6dkx5anZ5TE5SRnU5b3pRLXVrWUROdw==' },
// });

const AboutPage = memo(() => {
    const date = new Date();
    // const currentTime = `${date.getFullYear()}, ${date.getMonth()},  ${date.getDate()}`;
    const { t } = useTranslation('about');

    return (
        <div className="time">
            {t('about page')}
            123
            {/* <div>{currentTime}</div> */}
        </div>
    );
});

export default AboutPage;
