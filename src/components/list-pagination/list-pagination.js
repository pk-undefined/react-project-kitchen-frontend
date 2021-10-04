import React from 'react';
import { StyledListItem, StyledListPagination } from './styled-list-pagination';

const ListPagination = (props) => {
  if (props.articlesCount <= props.countPage) {
    return null;
  }

  const range = [];
  for (let i = 0; i < Math.ceil(props.articlesCount / props.countPage); ++i) {
    range.push(i);
  }

  return (
    <nav>
      <StyledListPagination>

        {
          range.map((v) => {
            const isCurrent = v === props.pager;
            const onClick = (ev) => {
              ev.preventDefault();
              props.setPager(v);
            };
            return (
              <StyledListItem
                aria-hidden
                isActive={isCurrent}
                onClick={onClick}
                key={v.toString()}
              >

                <a href="#">{v + 1}</a>

              </StyledListItem>
            );
          })
        }

      </StyledListPagination>
    </nav>
  );
};

export default ListPagination;
