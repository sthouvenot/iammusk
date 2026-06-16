# I Am Musk

A money simulator that puts extreme wealth in real time. Pick a billionaire or an
everyday earner, and watch the dollars pile up second by second from the moment the page
loads. Live at [iammusk.com](https://iammusk.com).

The idea is simple and a little uncomfortable: by the time you've read this sentence,
Elon Musk's net worth has grown by more than most people earn in a year. I Am Musk makes
that gap impossible to ignore by letting you stand in anyone's shoes and feel the money
move.

## Net worth vs. income

For billionaires the counter tracks net worth; for everyday earners it tracks income.
That mix is intentional, because it reflects how each group's money actually accrues. A
billionaire's fortune grows mostly through the rising value of assets they already own,
not through a paycheck, so a salary figure would wildly understate how fast their wealth
piles up. A typical worker holds little to no appreciating wealth, so income is the only
number that captures what they really take home. Measuring net-worth growth against income
is therefore the most honest way to show what each group actually gains as the clock ticks.

## The numbers

Figures refreshed June 16, 2026.

| Who | Per year | Per second |
| --- | --- | --- |
| Elon Musk | $654,000,000,000 | **$20,738.46** |
| Mark Zuckerberg | $21,600,000,000 | **$684.93** |
| Jeff Bezos | $14,000,000,000 | **$443.94** |
| Top 0.1% income earner | $3,312,693 | $0.105 |
| Top 1% income earner | $800,000 | $0.025 |
| Average American | $66,622 | $0.0021 |
| Minimum-wage worker | $15,080 * | $0.00048 |

\* Full-time at the federal minimum wage of $7.25/hr, unchanged since 2009.

For billionaires the per-year value is the year-to-date change in net worth (from the
[Bloomberg Billionaires Index](https://www.bloomberg.com/billionaires/)); for everyday
earners it's annual income. Each per-second figure is that yearly number divided by
31,536,000, the number of seconds in a year. All values live in
[`js/money.js`](js/money.js) if you'd like to tweak them.

> On Musk's number: 2026 sources diverge wildly on his net worth thanks to the SpaceX-IPO
> "first trillionaire" narrative. The figure here reflects the high-end Bloomberg snapshot,
> so adjust to taste.

## Sources

- Billionaire wealth: [Bloomberg Billionaires Index](https://www.bloomberg.com/billionaires/)
- Top 0.1% / 1% income: [Investopedia](https://www.investopedia.com/personal-finance/how-much-income-puts-you-top-1-5-10/)
- Average U.S. salary: [SoFi](https://www.sofi.com/learn/content/average-salary-in-us/)
- Minimum wage: [UC Davis Center for Poverty Research](https://poverty.ucdavis.edu/faq/what-are-annual-earnings-full-time-minimum-wage-worker)
