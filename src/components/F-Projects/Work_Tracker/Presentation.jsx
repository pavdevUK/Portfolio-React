import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  color: #333;
  margin-bottom: 10px;
`;

const Subtitle = styled.h3`
  color: #666;
  font-weight: normal;
`;

const SummaryCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

const Card = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
  border-radius: 10px;
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.div`
  font-size: 14px;
  opacity: 0.9;
  margin-bottom: 10px;
`;

const CardValue = styled.div`
  font-size: 28px;
  font-weight: bold;
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  margin-bottom: 30px;
`;

const DayCell = styled.div`
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  background: ${(props) => (props.inWork ? '#4CAF50' : '#f5f5f5')};
  color: ${(props) => (props.inWork ? 'white' : '#666')};
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const DayNumber = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const DayName = styled.div`
  font-size: 12px;
  opacity: 0.8;
`;

const Earnings = styled.div`
  font-size: 14px;
  margin-top: 5px;
`;

const TableContainer = styled.div`
  overflow-x: auto;
  margin-bottom: 30px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Th = styled.th`
  background: #667eea;
  color: white;
  padding: 12px;
  text-align: left;
  font-weight: 600;
`;

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #e0e0e0;
`;

const Tr = styled.tr`
  &:hover {
    background: #f5f5f5;
  }
`;

const HoursBreakdown = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
  margin-bottom: 30px;
`;

const HourCard = styled.div`
  padding: 15px;
  border-radius: 8px;
  background: #f8f9fa;
  border-left: 4px solid ${(props) => props.color || '#667eea'};
`;

const HourLabel = styled.div`
  font-size: 12px;
  color: #666;
  margin-bottom: 5px;
`;

const HourValue = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #333;
`;

const MonthPicker = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 30px;
  flex-wrap: wrap;
`;

const MonthButton = styled.button`
  padding: 10px 20px;
  border: 2px solid ${(props) => (props.active ? '#667eea' : '#ddd')};
  background: ${(props) => (props.active ? '#667eea' : 'white')};
  color: ${(props) => (props.active ? 'white' : '#333')};
  border-radius: 5px;
  cursor: pointer;
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  transition: all 0.3s;

  &:hover {
    background: ${(props) => (props.active ? '#5568d3' : '#f0f0f0')};
    border-color: #667eea;
  }
`;

const ViewToggle = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const ToggleButton = styled.button`
  padding: 12px 30px;
  border: none;
  background: ${(props) =>
    props.active
      ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      : '#e0e0e0'};
  color: ${(props) => (props.active ? 'white' : '#666')};
  border-radius: 25px;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  transition: all 0.3s;
  box-shadow: ${(props) =>
    props.active ? '0 4px 6px rgba(0, 0, 0, 0.2)' : 'none'};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
`;

const YearSummaryCard = styled.div`
  background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
  padding: 30px;
  border-radius: 15px;
  color: white;
  margin-bottom: 30px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
`;

const YearTitle = styled.h2`
  margin: 0 0 20px 0;
  font-size: 32px;
  text-align: center;
`;

const YearStats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

const YearStatItem = styled.div`
  text-align: center;
  padding: 15px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
`;

const YearStatLabel = styled.div`
  font-size: 14px;
  opacity: 0.9;
  margin-bottom: 5px;
`;

const YearStatValue = styled.div`
  font-size: 28px;
  font-weight: bold;
`;

function Presentation({ data }) {
  console.log('Presentation component rendered, data:', data);

  // State for view mode and selected month
  const [viewMode, setViewMode] = useState('month'); // 'month' or 'year'
  const [selectedMonthIndex, setSelectedMonthIndex] = useState(0);

  // Handle if data is an array (multiple months), use first month
  let allMonths = [];
  let monthData = data;

  if (Array.isArray(data)) {
    allMonths = data;
    monthData = data[selectedMonthIndex] || data[0];
  } else {
    allMonths = [data];
    monthData = data;
  }

  // Validate data structure
  if (!monthData || !monthData.calendar || !Array.isArray(monthData.calendar)) {
    return (
      <Container>
        <div
          style={{
            padding: '40px',
            textAlign: 'center',
            fontSize: '24px',
            color: '#333',
            backgroundColor: '#f5f5f5',
            borderRadius: '8px',
          }}
        >
          No data available or invalid data format
          {data && (
            <div style={{ fontSize: '14px', marginTop: '10px', color: '#666' }}>
              Expected: object with calendar array. Got: {typeof data}
            </div>
          )}
        </div>
      </Container>
    );
  }

  // Use monthData instead of data from here on
  data = monthData;

  // Calculate summary statistics
  const totalEarned = data.calendar
    .filter((day) => day.inWork)
    .reduce((sum, day) => sum + (day.earnedFromHours?.TotalEarned || 0), 0);

  const daysWorked = data.calendar.filter((day) => day.inWork).length;

  const totalHours = data.calendar.reduce((sum, day) => {
    if (!day.hours) return sum;
    const dayHours =
      (day.hours.nightHours || 0) +
      (day.hours.dayHours || 0) +
      (day.hours.weekendHours || 0);
    return sum + dayHours;
  }, 0);

  const nightHours = data.calendar.reduce(
    (sum, day) => sum + (day.hours?.nightHours || 0),
    0
  );

  const dayHours = data.calendar.reduce(
    (sum, day) => sum + (day.hours?.dayHours || 0),
    0
  );

  const weekendHours = data.calendar.reduce(
    (sum, day) => sum + (day.hours?.weekendHours || 0),
    0
  );

  // Calculate year summary if we have multiple months
  const yearSummary =
    allMonths.length > 1
      ? {
          totalEarned: allMonths.reduce((sum, month) => {
            return (
              sum +
              month.calendar
                .filter((day) => day.inWork)
                .reduce(
                  (monthSum, day) =>
                    monthSum + (day.earnedFromHours?.TotalEarned || 0),
                  0
                )
            );
          }, 0),
          totalDaysWorked: allMonths.reduce((sum, month) => {
            return sum + month.calendar.filter((day) => day.inWork).length;
          }, 0),
          totalHours: allMonths.reduce((sum, month) => {
            return (
              sum +
              month.calendar.reduce((monthSum, day) => {
                if (!day.hours) return monthSum;
                return (
                  monthSum +
                  (day.hours.nightHours || 0) +
                  (day.hours.dayHours || 0) +
                  (day.hours.weekendHours || 0)
                );
              }, 0)
            );
          }, 0),
          monthsCount: allMonths.length,
          year: allMonths[0]?.year,
        }
      : null;

  return (
    <Container>
      {/* View Toggle */}
      {allMonths.length > 1 && (
        <ViewToggle>
          <ToggleButton
            active={viewMode === 'month'}
            onClick={() => setViewMode('month')}
          >
            Month View
          </ToggleButton>
          <ToggleButton
            active={viewMode === 'year'}
            onClick={() => setViewMode('year')}
          >
            Year Summary
          </ToggleButton>
        </ViewToggle>
      )}

      {/* Year Summary View */}
      {viewMode === 'year' && yearSummary && (
        <YearSummaryCard>
          <YearTitle>Year {yearSummary.year} Summary</YearTitle>
          <YearStats>
            <YearStatItem>
              <YearStatLabel>Total Earned</YearStatLabel>
              <YearStatValue>
                £{yearSummary.totalEarned.toFixed(2)}
              </YearStatValue>
            </YearStatItem>
            <YearStatItem>
              <YearStatLabel>Total Days Worked</YearStatLabel>
              <YearStatValue>{yearSummary.totalDaysWorked}</YearStatValue>
            </YearStatItem>
            <YearStatItem>
              <YearStatLabel>Total Hours</YearStatLabel>
              <YearStatValue>{yearSummary.totalHours.toFixed(1)}</YearStatValue>
            </YearStatItem>
            <YearStatItem>
              <YearStatLabel>Months</YearStatLabel>
              <YearStatValue>{yearSummary.monthsCount}</YearStatValue>
            </YearStatItem>
            <YearStatItem>
              <YearStatLabel>Avg Monthly Earnings</YearStatLabel>
              <YearStatValue>
                £
                {(yearSummary.totalEarned / yearSummary.monthsCount).toFixed(2)}
              </YearStatValue>
            </YearStatItem>
          </YearStats>
        </YearSummaryCard>
      )}

      {/* Month Picker */}
      {viewMode === 'month' && allMonths.length > 1 && (
        <MonthPicker>
          {allMonths.map((month, index) => (
            <MonthButton
              key={index}
              active={selectedMonthIndex === index}
              onClick={() => setSelectedMonthIndex(index)}
            >
              {month.name || month.monthName}
            </MonthButton>
          ))}
        </MonthPicker>
      )}

      {/* Month View */}
      {viewMode === 'month' && (
        <>
          <Header>
            <Title>
              {data.name || data.monthName} {data.year}
            </Title>
            <Subtitle>Work Tracker Summary</Subtitle>
          </Header>

          {/* Summary Cards */}
          <SummaryCards>
            <Card>
              <CardTitle>Total Earned</CardTitle>
              <CardValue>£{totalEarned.toFixed(2)}</CardValue>
            </Card>
            <Card>
              <CardTitle>Days Worked</CardTitle>
              <CardValue>{daysWorked}</CardValue>
            </Card>
            <Card>
              <CardTitle>Total Hours</CardTitle>
              <CardValue>{totalHours.toFixed(1)}</CardValue>
            </Card>
            <Card>
              <CardTitle>Avg Daily Earnings</CardTitle>
              <CardValue>
                £{(totalEarned / daysWorked || 0).toFixed(2)}
              </CardValue>
            </Card>
          </SummaryCards>

          {/* Hours Breakdown */}
          <h2
            style={{
              marginBottom: '15px',
              color: '#333',
              fontSize: '20px',
              textTransform: 'capitalize',
              padding: '10px 0px 0px 0px',
              margin: '0px',
            }}
          >
            Hours Breakdown
          </h2>
          <HoursBreakdown>
            <HourCard color='#FFA726'>
              <HourLabel>Night Hours</HourLabel>
              <HourValue>{nightHours.toFixed(1)}</HourValue>
            </HourCard>
            <HourCard color='#42A5F5'>
              <HourLabel>Day Hours</HourLabel>
              <HourValue>{dayHours.toFixed(1)}</HourValue>
            </HourCard>
            <HourCard color='#66BB6A'>
              <HourLabel>Weekend Hours</HourLabel>
              <HourValue>{weekendHours.toFixed(1)}</HourValue>
            </HourCard>
          </HoursBreakdown>

          {/* Calendar Grid */}
          <h2
            style={{
              marginBottom: '15px',
              color: '#333',
              fontSize: '20px',
              textTransform: 'capitalize',
              padding: '10px 0px 0px 0px',
              margin: '0px',
            }}
          >
            Calendar View
          </h2>
          <CalendarGrid>
            {data.calendar.map((day) => (
              <DayCell key={day.id} inWork={day.inWork}>
                <DayNumber>{day.day}</DayNumber>
                <DayName>{day.weekDay.slice(0, 3)}</DayName>
                {day.inWork && day.earnedFromHours?.TotalEarned && (
                  <Earnings>
                    £{day.earnedFromHours.TotalEarned.toFixed(2)}
                  </Earnings>
                )}
              </DayCell>
            ))}
          </CalendarGrid>

          {/* Detailed Table */}
          <h2
            style={{
              marginBottom: '15px',
              color: '#333',
              fontSize: '20px',
              textTransform: 'capitalize',
              padding: '10px 0px 0px 0px',
              margin: '0px',
            }}
          >
            Detailed Work Log
          </h2>
          <TableContainer>
            <Table>
              <thead>
                <tr>
                  <Th>Date</Th>
                  <Th>Day</Th>
                  <Th>Start</Th>
                  <Th>Finish</Th>
                  <Th>Hours</Th>
                  <Th>Earned</Th>
                </tr>
              </thead>
              <tbody>
                {data.calendar
                  .filter((day) => day.inWork)
                  .map((day) => {
                    const totalDayHours =
                      (day.hours?.nightHours || 0) +
                      (day.hours?.dayHours || 0) +
                      (day.hours?.weekendHours || 0);
                    return (
                      <Tr key={day.id}>
                        <Td>{new Date(day.date).toLocaleDateString()}</Td>
                        <Td>{day.weekDay}</Td>
                        <Td>{day.start || '-'}</Td>
                        <Td>{day.finishBasic || '-'}</Td>
                        <Td>{totalDayHours.toFixed(1)}h</Td>
                        <Td>
                          £{(day.earnedFromHours?.TotalEarned || 0).toFixed(2)}
                        </Td>
                      </Tr>
                    );
                  })}
              </tbody>
            </Table>
          </TableContainer>

          {/* Rates Info */}
          <h2
            style={{
              marginBottom: '15px',
              color: '#333',
              fontSize: '20px',
              textTransform: 'capitalize',
              padding: '10px 0px 0px 0px',
              margin: '0px',
            }}
          >
            Pay Rates
          </h2>
          <HoursBreakdown>
            <HourCard color='#667eea'>
              <HourLabel>Basic Rate</HourLabel>
              <HourValue>£{data.rates.basic.toFixed(2)}</HourValue>
            </HourCard>
            <HourCard color='#FFA726'>
              <HourLabel>Night Rate ({data.rates.nights.percent}%)</HourLabel>
              <HourValue>£{data.rates.nights.rate.toFixed(2)}</HourValue>
            </HourCard>
            <HourCard color='#66BB6A'>
              <HourLabel>
                Weekend Rate ({data.rates.weekends.percent}%)
              </HourLabel>
              <HourValue>£{data.rates.weekends.rate.toFixed(2)}</HourValue>
            </HourCard>
            <HourCard color='#EF5350'>
              <HourLabel>
                Overtime Rate ({data.rates.overtime.percent}%)
              </HourLabel>
              <HourValue>£{data.rates.overtime.rate.toFixed(2)}</HourValue>
            </HourCard>
          </HoursBreakdown>
        </>
      )}
    </Container>
  );
}

export default Presentation;
