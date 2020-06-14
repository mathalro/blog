import React from 'react';
import ArticleCard from './ArticleBlock';
import { Column, Row } from 'simple-flexbox';

const description1 = "Lorem ipsum dolor sit amet, mea ne tale reque ocurreret. His ad mentitum patrioque, ea vix commodo fabulas liberavisse. No usu porro contentiones, falli eripuit duo ut. In zril commune pro, brute suscipiantur ei eos. Est feugait assueverit eu. Ad sed dico euismod evertitur, cum te virtute accusamus, at nec epicuri repudiare. Facer possit volumus vix ea, sit no erat modus illum, sale dolores blandit eos ei.";
const description2 = "Lorem ipsum dolor sit amet, mea ne tale reque ocurreret. His ad mentitum patrioque, ea vix commodo fabulas liberavisse. No usu porro contentiones, falli eripuit duo ut. In zril commune pro, brute suscipiantur ei eos. Est feugait assueverit eu. Ad sed dico euismod evertitur, cum te virtute accusamus, at nec epicuri repudiare. Facer possit volumus vix ea, sit no erat modus illum, sale dolores blandit eos ei.";

const ArticleList = () => {
  return (
    <Column flexGrow={1}>
      <Row vertical='center'>
        <Column flexGrow={1}>
          <ArticleCard imageUrl="https://i.ytimg.com/vi/6bUtKHTMDmk/maxresdefault.jpg" author="Matheus Rosa" title="Teste1" description={description1} />
        </Column>
        <Column flexGrow={1}>
          <ArticleCard imageUrl="https://miro.medium.com/max/3840/1*b09xb-uH4quoeaAkruypSQ.png" author="Matheus Rosa" title="Teste2" description={description2} />
        </Column>
      </Row>
      <Row vertical='center'>
        <Column flexGrow={1}>
          <ArticleCard imageUrl="https://i.ytimg.com/vi/6bUtKHTMDmk/maxresdefault.jpg" author="Matheus Rosa" title="Teste1" description={description1} />
        </Column>
        <Column flexGrow={1}>
          <ArticleCard imageUrl="https://miro.medium.com/max/3840/1*b09xb-uH4quoeaAkruypSQ.png" author="Matheus Rosa" title="Teste2" description={description2} />
        </Column>
      </Row>
    </Column>
  );
}

export default ArticleList;