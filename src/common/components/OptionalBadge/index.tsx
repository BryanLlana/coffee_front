import styled from "styled-components";

//TODO implement base badge
export default function OptionalBadge() {
  return <Badge>Opcional</Badge>;
}

const Badge = styled.div`
  display: flex;
  height: 20px;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 14px;
  background: #e9ecef;
  color: #343a40;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.48px;
`;
