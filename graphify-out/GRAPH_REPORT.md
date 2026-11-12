# Graph Report - aihot  (2026-11-08)

## Corpus Check
- 649 files · ~535,867 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 16 file(s) not represented in the graph (top: (none) 7, .jsonl 3, .ttf 2)

## Summary
- 4715 nodes · 16187 edges · 225 communities (151 shown, 74 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 191 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `e795a533`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- seo.ts
- src/site.ts
- queue.ts
- db.ts
- group.ts
- ReportPaper.tsx
- local-state.ts
- config.ts
- setup.ts
- icons.tsx
- stories.ts
- Sql
- agent.tsx
- publication/items.ts
- publication/agent.ts
- http-fetch.ts
- beijingDate
- admin/content.ts
- eval-selection.ts
- root.tsx
- routes/mcp.ts
- hot.tsx
- topics.ts
- analyze.ts
- compose.ts
- routes/admin.ts
- translate.ts
- upsertMaterial
- sanitize.ts
- auth.ts
- panels.tsx
- operations/feedback.ts
- source.tsx
- admin/sources.ts
- ref_node_fs
- extract.ts
- x.ts
- routes/site.ts
- publication/feeds.ts
- web-list.ts
- site/site.ts
- publication/reports.ts
- images.ts
- ReadingGroup.tsx
- eval-story-digests.ts
- SignalRiver.tsx
- writing.ts
- alerts.ts
- llm.ts
- sources/collect.ts
- publish.ts
- publication/v1.ts
- receipts.ts
- src/admin.ts
- tag
- 0003_monitor_leaderboard_notify.sql
- content-freshness.test.ts
- articles
- react
- rss.ts
- publications
- web/server.ts
- json-list.ts
- backup.test.ts
- model-failover.test.ts
- media/og.ts
- notify/agent.ts
- api/package.json
- analyze.test.ts
- architecture.test.ts
- routes/og.ts
- adminGet
- report-candidates.test.ts
- compilerOptions
- 0002_events_reports.sql
- dependencies
- media-performance.test.ts
- models.tsx
- sources.tsx
- backend/package.json
- web/package.json
- 0001_core.sql
- consolidate.ts
- agent-wake.test.ts
- changelog.tsx
- http-policy.ts
- health.ts
- feishu.ts
- README.md
- compilerOptions
- web-server.ts
- worker/package.json
- runs.ts
- react-router
- README.en.md
- site/package.json
- ingest/items.ts
- schedules.ts
- 信源
- weekly-stats/package.json
- news-value.test.ts
- prepare.ts
- dates.ts
- nameplates.ts
- contracts/src/modules.ts
- 0004_admin_ops.sql
- selection-score.md
- package.json
- customize.md
- icons.ts
- databases.ts
- 更新
- dependencies
- modelRoute
- operations/reports.ts
- circuit.ts
- source-publication-window.test.ts
- web-render-recovery.standalone.test.ts
- contracts/package.json
- page-width.test.ts
- timeline-unread.test.ts
- 架构
- 把它改成你的行业
- 用 Docker（推荐）
- scripts
- 精选与校准
- content-understanding.md
- devDependencies
- devDependencies
- navigation-performance.test.ts
- 隐私说明
- 使用规则
- 给 Agent 的说明
- 0006_embeddings.sql
- receipt_attempts
- weekly-stats/server.ts
- sendDigest
- scripts
- 参与贡献
- 事件综述提示词评测
- industry/package.json
- api/tsconfig.json
- worker/tsconfig.json
- pool_search
- grouping.md
- pull_request_template.md
- industry/tsconfig.json
- modules/tsconfig.json
- backend/tsconfig.json
- contracts/tsconfig.json
- site/tsconfig.json
- tests/tsconfig.json
- 0009_selectbench.sql
- assets/README.md
- 0010_service_prices.sql
- 0038_quote_translations.sql
- 0040_oss_domain_recovery.sql
- 0048_leaderboard_calibrations.sql
- 0087_feedback_submission_state.sql
- { shouldRevalidate }

## God Nodes (most connected - your core abstractions)
1. `Sql` - 422 edges
2. `closeDb()` - 131 edges
3. `tag()` - 116 edges
4. `upsertMaterial()` - 85 edges
5. `react` - 77 edges
6. `config` - 76 edges
7. `stopBoss()` - 75 edges
8. `react-router` - 69 edges
9. `SITE` - 68 edges
10. `beijingDate()` - 64 edges

## Surprising Connections (you probably didn't know these)
- `给本仓库提 PR` --references--> `sendFile()`  [INFERRED]
  AGENTS.md → apps/api/src/routes/static.ts
- `模块` --references--> `sendFile()`  [INFERRED]
  docs/architecture.md → apps/api/src/routes/static.ts
- `rss` --references--> `description()`  [INFERRED]
  docs/sources.md → apps/web/app/routes/topic.tsx
- `4. 改完提示词之后` --references--> `rewriteStoryDigest()`  [INFERRED]
  docs/story-digest-evaluation.md → packages/backend/src/events/corrections.ts
- `安全问题报告` --references--> `main()`  [INFERRED]
  SECURITY.md → scripts/eval-relations.ts

## Import Cycles
- None detected.

## Communities (225 total, 74 thin omitted)

### Community 0 - "seo.ts"
Cohesion: 0.04
Nodes (103): BrandMark(), CopyPage(), LegalFooterLinks(), Pagination(), loadFollowups(), feedLink(), kindFromPath(), ApiError (+95 more)

### Community 1 - "src/site.ts"
Cohesion: 0.04
Nodes (93): IconDownload(), IconExternal(), IconList(), IconMore(), IconShare(), SameEventBadge(), SelectedBadge(), Tone (+85 more)

### Community 2 - "queue.ts"
Cohesion: 0.05
Nodes (85): heartbeat, shutdown(), registerSchedules(), isHistorical(), MaterialResult, newsCondition, textSettled, TimelineDecision (+77 more)

### Community 3 - "db.ts"
Cohesion: 0.05
Nodes (39): buildApp(), RequestLogs, closeDb(), HotEntry, loadPool(), T, dir, files (+31 more)

### Community 4 - "group.ts"
Cohesion: 0.05
Nodes (97): alreadyOnCard(), echoesOnCard(), factHasCard(), firstSame(), foldsUnder(), ownArticleOnCard(), readerOf(), recall() (+89 more)

### Community 5 - "ReportPaper.tsx"
Cohesion: 0.05
Nodes (86): IconArrowRight(), BackTarget, Badge(), IntentLink(), Kicker(), dateLine(), dateMark(), ENTRIES_UNIT (+78 more)

### Community 6 - "local-state.ts"
Cohesion: 0.04
Nodes (83): APPEARANCE_BOOT_SCRIPT, cache, cached(), clearRecentSearches(), editLocalData(), emit(), EMPTY_SET, EMPTY_STARRED (+75 more)

### Community 7 - "config.ts"
Cohesion: 0.03
Nodes (63): shutdown(), assertProductionSecrets(), config, CredentialGroup, credentials(), groupCache, groupFile(), isProduction (+55 more)

### Community 8 - "setup.ts"
Cohesion: 0.04
Nodes (55): analysisStep, BY_SYSTEM, SELECTING_SCORE, calls, children, finish(), kill(), T (+47 more)

### Community 9 - "icons.tsx"
Cohesion: 0.05
Nodes (86): IconArrowLeft(), IconBolt(), IconBookmark(), IconChart(), IconChevronRight(), IconClock(), IconCode(), IconDoc() (+78 more)

### Community 10 - "stories.ts"
Cohesion: 0.06
Nodes (81): behindSources(), computeHotRanking(), currentSignals(), heatIndex(), HeatRow, heatRows(), heatSeries(), HOT_RULE_VERSION (+73 more)

### Community 11 - "Sql"
Cohesion: 0.04
Nodes (71): extractArticleBody(), extractXArticle(), markUnconfirmed(), contentHash(), fillScheduledPublications(), FUTURE_TOLERANCE_MS, STALE_ON_DISCOVERY_MS, Sql (+63 more)

### Community 12 - "agent.tsx"
Cohesion: 0.06
Nodes (71): IconCheck(), IconClose(), IconSearch(), BarButton, PhoneBar(), layers, useModal(), AsideCard() (+63 more)

### Community 13 - "publication/items.ts"
Cohesion: 0.07
Nodes (70): textToHtml(), one(), withCustomPlans(), itemAvailability(), DetailResult, DetailRow, exportMarkdown(), loadItemDetail() (+62 more)

### Community 14 - "publication/agent.ts"
Cohesion: 0.07
Nodes (70): applyPublicHeaders(), clientIp(), etagMatches(), PROBLEM_TITLES, ProblemInit, PublicHeadersOptions, QueryError, sendJsonWithEtag() (+62 more)

### Community 15 - "http-fetch.ts"
Cohesion: 0.06
Nodes (51): ConnectCallback, ConnectOptions, createEgressProxy(), createEgressResolver(), OUTBOUND_HTTP_OPTIONS, PinnedProxyClient, Resolve, brokenHandshake() (+43 more)

### Community 16 - "beijingDate"
Cohesion: 0.08
Nodes (50): dateHeading(), DayList(), DayHeader(), ListState, TimelineSlot(), ArchiveGroup, archiveGroups(), archiveMark() (+42 more)

### Community 17 - "admin/content.ts"
Cohesion: 0.07
Nodes (60): 社区修复、时间规则与读取优化（2026 年 10 月 4 日）, Chain, correctPublicationDate(), DatedFields, FieldsSchema, historicalDate(), inHotRanking(), liveDate() (+52 more)

### Community 18 - "eval-selection.ts"
Cohesion: 0.07
Nodes (55): AnalysisRun, SELECTION_PROMPT_VERSION, AnalyzeInputArticle, IdentityGuard, pairUser(), Relation, RELATIONS, STORY_REVIEW_MIN_CONFIDENCE (+47 more)

### Community 19 - "root.tsx"
Cohesion: 0.07
Nodes (47): IconArrowUp(), IconChevronLeft(), BackToTop(), NavigationProgress(), TabKey, BackButton(), useHeadingUnderBar(), useScrolled() (+39 more)

### Community 20 - "routes/mcp.ts"
Cohesion: 0.05
Nodes (49): abilities(), allowedHosts(), allowedOrigin(), ANNOTATIONS, answers, buildMcpServer(), category, CORS_EXPOSE (+41 more)

### Community 21 - "hot.tsx"
Cohesion: 0.08
Nodes (46): IconChevronDown(), IconInfo(), SourceAvatar(), placeOf(), SIZES, TabItem, Thumb(), thumbs (+38 more)

### Community 22 - "topics.ts"
Cohesion: 0.07
Nodes (51): BRAND, Entry, etagOf(), fileCache, fillPlaceholders(), loadFile(), PUBLIC, registerStatic() (+43 more)

### Community 23 - "analyze.ts"
Cohesion: 0.08
Nodes (52): ANALYZE_PROMPT_VERSION, analyzeArticle(), AnalyzeResult, awaitsMaterial(), buildScoreInput(), checkAnalysisRunning(), FactSchema, isContentFilter() (+44 more)

### Community 24 - "compose.ts"
Cohesion: 0.07
Nodes (49): CATEGORIES, CATEGORY_TAGS, ENTITIES, ENTITY_TAGS, IDENTITY_CONTEXT_ALIASES, IDENTITY_LEXICON, ITEM_TYPES, PLAIN_TERMS (+41 more)

### Community 25 - "routes/admin.ts"
Cohesion: 0.09
Nodes (46): body(), decodeImage(), notFound(), orNotFound(), page(), param(), q, registerAdmin() (+38 more)

### Community 26 - "translate.ts"
Cohesion: 0.07
Nodes (43): sameBarringLoss(), isEmptyOrLinkOnly(), originalPostCopy(), withXArticle(), PresentationMismatch, rebaseTranslation(), textBlocks(), normalizeStructure() (+35 more)

### Community 27 - "upsertMaterial"
Cohesion: 0.05
Nodes (39): upsertMaterial(), article(), material(), article(), autofill, html(), navigation, prose (+31 more)

### Community 28 - "sanitize.ts"
Cohesion: 0.09
Nodes (39): bodyToMarkdown(), markdownBody(), turndown, ALLOWED_TAGS, balanced(), block(), BLOCK_TAGS, collapse() (+31 more)

### Community 29 - "auth.ts"
Cohesion: 0.10
Nodes (45): adminHandler, attempts, feishuRedirect(), loginPage(), over(), registerAdminAuth(), secure(), tooManyAttempts() (+37 more)

### Community 30 - "panels.tsx"
Cohesion: 0.09
Nodes (38): IconCopy(), NavItem, Tab, CodeBlock(), CopyButton(), AGENT_PARTS, GUIDE_CLIENTS, TAG (+30 more)

### Community 31 - "operations/feedback.ts"
Cohesion: 0.09
Nodes (38): banFeedbackEmail(), FEEDBACK_KINDS, FEEDBACK_STATUSES, feedbackIdeas(), FeedbackKind, feedbackScreenshot(), FeedbackStatus, listFeedback() (+30 more)

### Community 32 - "source.tsx"
Cohesion: 0.14
Nodes (41): ago(), bj(), duration(), AdminPage(), BTN, ButtonLink(), ButtonTone, Card() (+33 more)

### Community 33 - "admin/sources.ts"
Cohesion: 0.07
Nodes (41): assertReplacementConfig(), CreateSchema, EDITABLE, findDuplicateSource(), kindHooks(), previewSource(), previewStoredSource(), PUBLICATION_FIELDS (+33 more)

### Community 34 - "ref_node_fs"
Cohesion: 0.07
Nodes (24): postgres, checkMigrations(), isMigration(), keyAt, password, text, runMigrations(), waitForBackupDump() (+16 more)

### Community 35 - "extract.ts"
Cohesion: 0.07
Nodes (36): codeBlock(), collapsed(), describeFigureDrawings(), descriptionTable(), Doc, drawingText(), dropLayoutClasses(), El (+28 more)

### Community 36 - "x.ts"
Cohesion: 0.09
Nodes (40): ReceiptResult, apiBase(), decodeTweetEntities(), get(), getArticle(), getTweet(), LOOKUP, objectsCost() (+32 more)

### Community 37 - "routes/site.ts"
Cohesion: 0.08
Nodes (39): looseQuery(), BadRequest, FilterParams, Handler, parseFilters(), registerSite(), siteHandler(), REPO_ROOT (+31 more)

### Community 38 - "publication/feeds.ts"
Cohesion: 0.10
Nodes (38): feedError(), registerFeeds(), sendFeed(), escapeXml(), State, submitIndexNow(), CACHE, cdata() (+30 more)

### Community 39 - "web-list.ts"
Cohesion: 0.11
Nodes (37): isSignInUrl(), pageRules, MaterialInput, requireOk(), articleUtcOffset(), readPublicationDate(), admitListing(), noiseFiltered() (+29 more)

### Community 40 - "site/site.ts"
Cohesion: 0.07
Nodes (26): Toaster(), AdminLayout(), AdminNavEntry, Counts, loader(), nav(), NavCount(), NavItem() (+18 more)

### Community 41 - "publication/reports.ts"
Cohesion: 0.12
Nodes (41): cached, proxiedImage(), proxiedImageSet(), mediaView(), itemUrl(), attribution(), bigrams(), citationFrom() (+33 more)

### Community 42 - "images.ts"
Cohesion: 0.08
Nodes (35): firstImagePart(), AVIF_QUALITIES, CACHE_DIR, cachedImage(), decodeIco(), encodeImage(), failures, fetchOriginal() (+27 more)

### Community 43 - "ReadingGroup.tsx"
Cohesion: 0.09
Nodes (34): IconArrowUpRight(), Collapse(), readTone(), GroupSheet(), GroupSources(), labelOf(), LoadState(), openGroups (+26 more)

### Community 44 - "eval-story-digests.ts"
Cohesion: 0.11
Nodes (34): DIR, expand(), expandText(), files, fill(), promptFromText(), promptVersion(), raw() (+26 more)

### Community 45 - "SignalRiver.tsx"
Cohesion: 0.09
Nodes (34): OutlineEntry, OutlineSheet(), Bundle, Colors, easeInOut(), KIND, Layout, paintPaper() (+26 more)

### Community 46 - "writing.ts"
Cohesion: 0.13
Nodes (36): runSummarize(), promptText(), anchorDate(), answerFirstSummaryLengthOk(), buildArticlePrompt(), buildLongTweetPrompt(), buildShortTweetPrompt(), capBody() (+28 more)

### Community 47 - "alerts.ts"
Cohesion: 0.08
Nodes (36): AlertState, backupAge(), Check, CHECKS, closeDailyAlert(), ClosedDailyAlert, closedDailyAlerts(), ClosureScope (+28 more)

### Community 48 - "llm.ts"
Cohesion: 0.12
Nodes (26): modelsOverview(), switchModel(), UsageRow, capabilities, Capability, capabilityAcceptsModel(), CapabilityKey, fallbackModelFor() (+18 more)

### Community 49 - "sources/collect.ts"
Cohesion: 0.09
Nodes (32): adaptIntervals(), admission(), applyDetail(), applyUsePace(), CollectionCandidate, CollectResult, coveredTo(), currentDateRead() (+24 more)

### Community 50 - "publish.ts"
Cohesion: 0.10
Nodes (26): updateSource(), XPostData, progress(), registerPublicationJobs(), AnalysisRow, ArticleRow, OverrideRow, PublicationRow (+18 more)

### Community 51 - "publication/v1.ts"
Cohesion: 0.14
Nodes (27): cachedByKey(), shared(), sharedSearch(), decodeCursor(), encodeCursor(), InvalidCursorError, queryBinding(), shortHash() (+19 more)

### Community 52 - "receipts.ts"
Cohesion: 0.12
Nodes (28): sha256(), embedBatch(), chatOnce(), isConnectFailure(), requestFor(), assertAccepted(), BudgetExceededError, budgetMessage() (+20 more)

### Community 53 - "src/admin.ts"
Cohesion: 0.08
Nodes (22): VISIBILITY_LABEL, Dialog, Step(), AdminAuditEntry, AdminAuditRow, AdminContentChain, AdminContentRow, AdminContentSearch (+14 more)

### Community 54 - "tag"
Cohesion: 0.08
Nodes (24): article(), runFresh(), EPISODES, server, source(), imported(), tag(), jsonConfig() (+16 more)

### Community 55 - "0003_monitor_leaderboard_notify.sql"
Cohesion: 0.10
Nodes (24): deliveries, deliveries_status_idx, delivery_leases, fx_rates, lb_aliases, lb_aliases_lookup_idx, lb_models, lb_rankings (+16 more)

### Community 56 - "content-freshness.test.ts"
Cohesion: 0.09
Nodes (21): deliverContent(), selectedContent(), normalizedTitle(), PushOutcome, pushSelected(), article(), T, body (+13 more)

### Community 57 - "articles"
Cohesion: 0.07
Nodes (18): article_discoveries, article_revisions, articles, articles_discovered_idx, articles_source_idx, editorial_overrides, translations, articles_processing_idx (+10 more)

### Community 58 - "react"
Cohesion: 0.17
Nodes (19): AdminError, newKey(), useAdminAction(), useAdminMe(), emit(), Item, items, listeners (+11 more)

### Community 59 - "rss.ts"
Cohesion: 0.13
Nodes (21): RFC-822, arr(), atomLink(), atomPlainText(), feedText(), fetchRss(), imagesFrom(), isTeaser() (+13 more)

### Community 60 - "publications"
Cohesion: 0.08
Nodes (17): publications, publications_pool_published_idx, publications_pool_timeline_idx, publications_search_trgm_idx, publications_selected_timeline_idx, publications_story_idx, publications_tags_idx, publications_eligible_updated_idx (+9 more)

### Community 61 - "web/server.ts"
Cohesion: 0.13
Nodes (20): handleRequest(), API, endToEnd(), HOP_BY_HOP, proxyToApi(), API_BASE_URL, BROWSER_MAX_SECONDS, handleError() (+12 more)

### Community 62 - "json-list.ts"
Cohesion: 0.14
Nodes (19): GuardedFetchOptions, GuardedResponse, languageHeaders(), JINA_PREFIX, embeddedJson(), fetchJsonList(), findKey(), firstString() (+11 more)

### Community 63 - "backup.test.ts"
Cohesion: 0.12
Nodes (19): fileSha256(), hex(), hmac(), run, runBackup(), signV4(), Store, upload() (+11 more)

### Community 64 - "model-failover.test.ts"
Cohesion: 0.14
Nodes (17): resumeAfterRelease(), markStaleDeliveries(), autoReleaseUnknownReceipts(), recoverStaleWork(), release(), releaseReceipt(), markStalePendingReceipts(), ModelOutputError (+9 more)

### Community 65 - "media/og.ts"
Cohesion: 0.16
Nodes (21): ACCENTS, aspect(), brandMark(), CACHE_DIR, clamp(), FALLBACK_FONTS, FONT_DIR, fonts() (+13 more)

### Community 66 - "notify/agent.ts"
Cohesion: 0.17
Nodes (21): agentConfigured(), agentTransportFindings(), clip(), deliver(), Event, flushAgentEvents(), handoffs(), publish() (+13 more)

### Community 67 - "api/package.json"
Cohesion: 0.09
Nodes (21): dependencies, @aihot/backend, @aihot/contracts, @aihot/industry, @aihot/site, fastify, @modelcontextprotocol/server, zod (+13 more)

### Community 68 - "analyze.test.ts"
Cohesion: 0.10
Nodes (15): READER_WORDING, StructureSchema, UNDERSTAND_FLOOR, FIELDS, ReaderCopy, wordingProblems(), MAX_BODY_CHARS, article() (+7 more)

### Community 69 - "architecture.test.ts"
Cohesion: 0.12
Nodes (13): CONVERTS_BEIJING_TIME, DEPLOYMENT, modules(), moduleWeb(), OWNERS, PRIVATE_ROUTES, PRODUCTION, PUBLIC_READS (+5 more)

### Community 70 - "routes/og.ts"
Cohesion: 0.18
Nodes (18): notFound(), PAGES, registerOg(), REPORT_NAMES, send(), OgCard, ogEtag(), renderOg() (+10 more)

### Community 71 - "adminGet"
Cohesion: 0.12
Nodes (17): adminGet(), adminHeaders(), adminSignedIn(), GRAY_HEADERS, grayGet(), loader(), subjectLink(), loader() (+9 more)

### Community 72 - "report-candidates.test.ts"
Cohesion: 0.13
Nodes (15): composeDaily(), dailyMetrics(), beijingAt(), at(), report(), analyzed(), selected(), T (+7 more)

### Community 73 - "compilerOptions"
Cohesion: 0.10
Nodes (19): compilerOptions, allowImportingTsExtensions, esModuleInterop, isolatedModules, jsx, lib, module, moduleResolution (+11 more)

### Community 74 - "0002_events_reports.sql"
Cohesion: 0.17
Nodes (19): fact_articles, fact_articles_article_idx, facts, facts_story_idx, hot_rankings, hot_rankings_time_idx, report_revisions, reports (+11 more)

### Community 75 - "dependencies"
Cohesion: 0.10
Nodes (20): dependencies, @aihot/contracts, @aihot/industry, @aihot/site, cheerio, entities, fast-xml-parser, linkedom (+12 more)

### Community 76 - "media-performance.test.ts"
Cohesion: 0.13
Nodes (9): imageCacheControl(), registerMedia(), failureSeconds(), LONGEST_CACHE_SECONDS, verifyProxyRequest(), AVIF_MODE_SUFFIX, descriptor, overBudgetGif (+1 more)

### Community 77 - "models.tsx"
Cohesion: 0.21
Nodes (12): money(), num(), pct(), Badge(), FilterChips(), ModelsAdmin(), secs(), SOURCE_LABEL (+4 more)

### Community 78 - "sources.tsx"
Cohesion: 0.16
Nodes (11): HEALTH_LABEL, KIND_LABEL, MODE_LABEL, SELECTION_CLASS_LABEL, TIER_LABEL, TEMPLATES, loader(), SELECTION (+3 more)

### Community 79 - "backend/package.json"
Cohesion: 0.11
Nodes (18): exports, @aihot/contracts, @aihot/industry, @aihot/site, zod, name, private, type (+10 more)

### Community 80 - "web/package.json"
Cohesion: 0.12
Nodes (14): streamTimeout, exports, @aihot/contracts, @aihot/industry, @aihot/site, name, private, type (+6 more)

### Community 81 - "0001_core.sql"
Cohesion: 0.17
Nodes (16): analyses, analyses_article_idx, budgets, fetch_runs, fetch_runs_source_idx, receipts, receipts_service_time_idx, receipts_status_idx (+8 more)

### Community 82 - "consolidate.ts"
Cohesion: 0.23
Nodes (16): Reader, Consolidation, linkRelatedStories(), startedByRoundup(), StoryRoot, GroupResult, candidateViews(), rootFactOf() (+8 more)

### Community 83 - "agent-wake.test.ts"
Cohesion: 0.12
Nodes (17): ServerModule, Finding, Brand, balance, clue, down, fake, found (+9 more)

### Community 84 - "changelog.tsx"
Cohesion: 0.16
Nodes (16): Inline(), setChangelogSeen(), ChangelogPage(), clientLoader, Day(), FeatureDay(), FeatureDrawing, handle (+8 more)

### Community 85 - "http-policy.ts"
Cohesion: 0.17
Nodes (14): devEdge(), apiOwnedPatterns(), CONTACT_ALIASES, ENGINE_API_PATHS, ENGINE_REDIRECTS, isApiOwned(), NO_STORE, OAUTH_PROBE_PATHS (+6 more)

### Community 86 - "health.ts"
Cohesion: 0.15
Nodes (16): SCHEDULED_AHEAD_MS, failsOften(), QuietSource, RHYTHM_MIN_DAYS, RHYTHM_MULTIPLE, RHYTHM_WINDOW_DAYS, rhythmMultiple(), SOURCE_PROBLEMS (+8 more)

### Community 87 - "feishu.ts"
Cohesion: 0.19
Nodes (16): formatReturn(), IMAGE_REFUSED, ImageRefusedError, jsonBytes(), Level, MARK, screenshotFor(), sendAlert() (+8 more)

### Community 88 - "README.md"
Cohesion: 0.12
Nodes (15): 为什么开源, 交流与贡献, 你会得到什么, 它是怎么工作的, 把它改成你的行业, 文档, 最后, 看一眼 (+7 more)

### Community 89 - "compilerOptions"
Cohesion: 0.12
Nodes (16): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, isolatedModules, lib, module, moduleResolution, noEmit (+8 more)

### Community 90 - "web-server.ts"
Cohesion: 0.26
Nodes (9): api, api, raw(), upstreamPaths, fakeApi(), startWebServer(), visit(), WebServer (+1 more)

### Community 91 - "worker/package.json"
Cohesion: 0.12
Nodes (15): dependencies, @aihot/backend, @aihot/contracts, @aihot/industry, @aihot/site, @aihot/backend, @aihot/contracts, @aihot/industry (+7 more)

### Community 92 - "runs.ts"
Cohesion: 0.20
Nodes (13): navCounts(), Runs, runsOverview(), failureGroupSql(), requeueFailed(), unknownOutcomes(), GROUPING_WARN_AFTER_MS, groupingOverview() (+5 more)

### Community 93 - "react-router"
Cohesion: 0.13
Nodes (8): FEEDBACK_KIND, FEEDBACK_STATUS, ComponentProps, LoaderArgs, TONE, AdminFeedback, AdminFeedbackRow, react-router

### Community 94 - "README.en.md"
Cohesion: 0.13
Nodes (14): A quick look, Before you start, Clustering and heat, Community and contributing, Documentation, Finally, How it works, License (+6 more)

### Community 95 - "site/package.json"
Cohesion: 0.13
Nodes (14): @aihot/weekly-stats, dependencies, @aihot/weekly-stats, exports, ./brand/*, ./models, ./modules, ./modules/server (+6 more)

### Community 96 - "ingest/items.ts"
Cohesion: 0.24
Nodes (10): authorized(), limited(), RATE_LIMIT, registerIngest(), unauthorized(), windows, IngestError, ingestItems() (+2 more)

### Community 97 - "schedules.ts"
Cohesion: 0.21
Nodes (12): ENGINE_SCHEDULES, Scheduled, base(), dajialaConfigured(), mpArticle, mpHistory, MpPost, outcomeOf() (+4 more)

### Community 98 - "信源"
Cohesion: 0.14
Nodes (14): json_list, mp_account, rss, x_search, 信源, 先预览，再创建, 六种信源, 分级、参与方式与全文 (+6 more)

### Community 99 - "weekly-stats/package.json"
Cohesion: 0.14
Nodes (13): dependencies, @aihot/backend, @aihot/contracts, exports, ./module, ./server, ./web, @aihot/backend (+5 more)

### Community 100 - "news-value.test.ts"
Cohesion: 0.19
Nodes (9): BatchSchema, age(), card(), releasedMinuteAgo(), report(), root(), selection, state() (+1 more)

### Community 101 - "prepare.ts"
Cohesion: 0.33
Nodes (11): registerNotifyJobs(), logError(), LoggedError, cacheFile(), convertAnimated(), convertAvif(), produceAvif(), produceImage() (+3 more)

### Community 102 - "dates.ts"
Cohesion: 0.27
Nodes (11): atOffset(), calendarDay(), collapse(), dayAt(), DAYS_BACK, describePublicationTime(), parseLooseDate(), PublicationDate (+3 more)

### Community 103 - "nameplates.ts"
Cohesion: 0.18
Nodes (12): opentype.js, boxes, chars, cjk, css, faces, fontFor(), fonts (+4 more)

### Community 104 - "contracts/src/modules.ts"
Cohesion: 0.28
Nodes (9): file(), modulePages, page(), RedirectRule, defineModule(), ModuleDeclaration, ModuleLayout, ModulePage (+1 more)

### Community 105 - "0004_admin_ops.sql"
Cohesion: 0.21
Nodes (12): admin_sessions, admin_users, audit_log, audit_log_subject_idx, feedback, feedback_bans, ingest_events, ingest_events_client_idx (+4 more)

### Community 106 - "selection-score.md"
Cohesion: 0.15
Nodes (12): 一、识别事件与内容类型, 三、使用以下类型权重合成分数, 事件、转述与材料不足, 事件口径校正（与主规则一起执行）, 二、按当前五轴独立打 0–10 整数分, 内部计算步骤（只在心里完成，不要输出）, 品味规则, 必须压住的噪声 (+4 more)

### Community 107 - "package.json"
Cohesion: 0.15
Nodes (12): engines, node, name, overrides, fflate, private, type, workspaces (+4 more)

### Community 109 - "icons.ts"
Cohesion: 0.33
Nodes (11): DEFAULT_UA, sourceOwnsPost(), findIcon(), findMissingIcons(), firstUsable(), homeOf(), iconCandidates(), page() (+3 more)

### Community 110 - "databases.ts"
Cohesion: 0.26
Nodes (10): dropCopies(), globalSetup(), globalTeardown(), name, onServer(), scratchPrefix(), suffix, template (+2 more)

### Community 111 - "更新"
Cohesion: 0.18
Nodes (11): share(), 升级到公开接口 3.0.0（2026 年 10 月 3 日）, 升级到公开接口 4.0.0（2026 年 10 月 3 日）, 原帖展示与引擎同步（2026 年 10 月 6 日）, 导航里可以不放某些入口, 更新, 站点文件搬进 `site/`（2026 年 10 月 4 日）, 读者文字的改用词（2026 年 10 月 9 日） (+3 more)

### Community 112 - "dependencies"
Cohesion: 0.18
Nodes (11): dependencies, @aihot/contracts, @aihot/industry, @aihot/site, highlight.js, isbot, motion, react (+3 more)

### Community 113 - "modelRoute"
Cohesion: 0.29
Nodes (9): modelRoute(), judgeStories(), judgeBatch(), judgeSignal(), batchUser(), candidateKey(), completeDecisions(), describeReport() (+1 more)

### Community 114 - "operations/reports.ts"
Cohesion: 0.33
Nodes (10): brief(), by(), excluded(), moduleOnly, n(), pct(), sourceChanges(), sourceHealthWeekly() (+2 more)

### Community 115 - "circuit.ts"
Cohesion: 0.29
Nodes (8): CircuitOpenError, CircuitPermit, closed(), enterModelCircuit(), keyOf(), ModelCircuit, recordModelHealth(), ProviderRejectedError

### Community 116 - "source-publication-window.test.ts"
Cohesion: 0.18
Nodes (10): articleReads, boundary, cutoff, dates, Item, listedEarlier, lists, now (+2 more)

### Community 117 - "web-render-recovery.standalone.test.ts"
Cohesion: 0.29
Nodes (6): onError, createRenderErrorHandler(), react-dom, browser(), get(), originalWindow

### Community 118 - "contracts/package.json"
Cohesion: 0.20
Nodes (9): dependencies, @aihot/industry, @aihot/site, exports, @aihot/industry, @aihot/site, name, private (+1 more)

### Community 119 - "page-width.test.ts"
Cohesion: 0.22
Nodes (7): api, article, groupCard, keys, longTitle, outline, PAGES

### Community 120 - "timeline-unread.test.ts"
Cohesion: 0.36
Nodes (7): api, card(), groupCard, readGroupCard, summaryOf(), feedItem(), itemDetail()

### Community 121 - "架构"
Cohesion: 0.22
Nodes (9): 三个进程, 几条不变的规则, 对外出口, 数据库迁移, 架构, 模块, 测试, 目录 (+1 more)

### Community 122 - "把它改成你的行业"
Cohesion: 0.22
Nodes (9): 1. 站名和文案：`site/site.ts`, 2. 分类、标签和主题：`industry/taxonomy.ts`、`industry/topics.json`, 3. 信源：`industry/sources.json`, 4. 精选标准：`industry/prompts/`, 5. 门槛与校准：`industry/selection.ts`, 7. 页面文案：`site/pages/`、`site/public/`、`site/changelog.json`, 8. 模型和部署, 把它改成你的行业 (+1 more)

### Community 123 - "用 Docker（推荐）"
Cohesion: 0.22
Nodes (9): 不用 Docker, 在中国大陆的服务器上, 备份, 用 Docker（推荐）, 看日志, 管理员会话与配置变更, 花多少钱, 部署 (+1 more)

### Community 124 - "scripts"
Cohesion: 0.22
Nodes (9): scripts, db:migrate, dev:api, dev:web, dev:worker, test, test:standalone, test:web (+1 more)

### Community 125 - "精选与校准"
Cohesion: 0.25
Nodes (8): 1. 准备样本集, 2. 跑评测, 3. 看错例，改标准，再跑, 一条资料怎么变成精选, 换模型, 校准, 精选与校准, 门槛：`industry/selection.ts`

### Community 126 - "content-understanding.md"
Cohesion: 0.25
Nodes (7): 中文标题和摘要, 作者角色, 候选阅读价值, 内容类型, 标签, 输入安全边界, principal()

### Community 127 - "devDependencies"
Cohesion: 0.25
Nodes (8): devDependencies, @modelcontextprotocol/client, opentype.js, @playwright/test, @types/node, @types/sanitize-html, @types/turndown, typescript

### Community 128 - "devDependencies"
Cohesion: 0.29
Nodes (7): devDependencies, @react-router/dev, tailwindcss, @tailwindcss/vite, @types/react, @types/react-dom, vite

### Community 129 - "navigation-performance.test.ts"
Cohesion: 0.33
Nodes (6): api, detail, hits, item, report(), FIXTURE_AT

### Community 130 - "隐私说明"
Cohesion: 0.29
Nodes (6): 1. 浏览器本地数据, 2. 反馈, 3. 服务器与网络日志, 4. 第三方内容, 5. 联系我们, 隐私说明

### Community 131 - "使用规则"
Cohesion: 0.29
Nodes (6): 1. 内容与版权, 2. 来源方的更正与下架, 3. 使用本站的数据, 4. 接口与频率, 5. 免责, 使用规则

### Community 132 - "给 Agent 的说明"
Cohesion: 0.33
Nodes (6): 写代码, 最常见的任务：改成另一个行业, 给 Agent 的说明, 给本仓库提 PR, 要守住的规则, 运行与检查

### Community 133 - "0006_embeddings.sql"
Cohesion: 0.40
Nodes (4): embeddings, grouping_decisions, grouping_decisions_article_idx, grouping_decisions_fact_idx

### Community 134 - "receipt_attempts"
Cohesion: 0.47
Nodes (4): receipt_attempts, receipt_attempts_pending_idx, receipt_attempts_service_time_idx, receipt_attempts_service_time_idx

### Community 135 - "weekly-stats/server.ts"
Cohesion: 0.40
Nodes (3): window, WeeklyStats, defineServerModule()

### Community 136 - "sendDigest"
Cohesion: 0.47
Nodes (6): dismissedFollowUps(), dismissFollowUp(), restoreFollowUp(), savedDismissals(), sendDigest(), sourceFollowUps()

### Community 137 - "scripts"
Cohesion: 0.40
Nodes (5): scripts, build, dev, start, typecheck

### Community 138 - "参与贡献"
Cohesion: 0.40
Nodes (5): 去哪里交流, 参与贡献, 提交改动, 贡献范围, check()

### Community 139 - "事件综述提示词评测"
Cohesion: 0.40
Nodes (5): 1. 准备案例, 2. 并排对比, 3. 人工看什么, 4. 改完提示词之后, 事件综述提示词评测

### Community 140 - "industry/package.json"
Cohesion: 0.40
Nodes (4): exports, name, private, type

### Community 141 - "api/tsconfig.json"
Cohesion: 0.50
Nodes (3): extends, include, ../../tsconfig.base.json

### Community 142 - "worker/tsconfig.json"
Cohesion: 0.50
Nodes (3): extends, include, ../../tsconfig.base.json

### Community 143 - "pool_search"
Cohesion: 0.83
Nodes (3): pool_search, pool_search_body_trgm_idx, pool_search_direct_trgm_idx

### Community 144 - "grouping.md"
Cohesion: 0.50
Nodes (3): 事件归组与关系评测, 用自己的标注样本评测两两关系判断, 运行

### Community 145 - "pull_request_template.md"
Cohesion: 0.50
Nodes (3): 兼容与使用影响, 如何验证, 解决什么问题

### Community 146 - "industry/tsconfig.json"
Cohesion: 0.50
Nodes (3): extends, include, ../tsconfig.base.json

### Community 147 - "modules/tsconfig.json"
Cohesion: 0.50
Nodes (3): extends, include, ../tsconfig.base.json

### Community 148 - "backend/tsconfig.json"
Cohesion: 0.50
Nodes (3): extends, include, ../../tsconfig.base.json

### Community 149 - "contracts/tsconfig.json"
Cohesion: 0.50
Nodes (3): extends, include, ../../tsconfig.base.json

### Community 150 - "site/tsconfig.json"
Cohesion: 0.50
Nodes (3): extends, include, ../tsconfig.base.json

### Community 151 - "tests/tsconfig.json"
Cohesion: 0.50
Nodes (3): extends, include, ../tsconfig.base.json

## Knowledge Gaps
- **1191 isolated node(s):** `name`, `private`, `type`, `exports`, `dev` (+1186 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1530 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **74 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Sql` connect `Sql` to `queue.ts`, `db.ts`, `group.ts`, `weekly-stats/server.ts`, `sendDigest`, `config.ts`, `stories.ts`, `setup.ts`, `publication/items.ts`, `publication/agent.ts`, `beijingDate`, `admin/content.ts`, `eval-selection.ts`, `routes/mcp.ts`, `topics.ts`, `analyze.ts`, `compose.ts`, `routes/admin.ts`, `translate.ts`, `upsertMaterial`, `auth.ts`, `operations/feedback.ts`, `admin/sources.ts`, `ref_node_fs`, `extract.ts`, `x.ts`, `routes/site.ts`, `publication/feeds.ts`, `publication/reports.ts`, `images.ts`, `eval-story-digests.ts`, `alerts.ts`, `llm.ts`, `sources/collect.ts`, `publish.ts`, `publication/v1.ts`, `receipts.ts`, `tag`, `content-freshness.test.ts`, `backup.test.ts`, `model-failover.test.ts`, `notify/agent.ts`, `analyze.test.ts`, `architecture.test.ts`, `routes/og.ts`, `report-candidates.test.ts`, `media-performance.test.ts`, `consolidate.ts`, `agent-wake.test.ts`, `health.ts`, `feishu.ts`, `runs.ts`, `ingest/items.ts`, `news-value.test.ts`, `icons.ts`, `operations/reports.ts`, `circuit.ts`, `source-publication-window.test.ts`?**
  _High betweenness centrality (0.120) - this node is a cross-community bridge._
- **Are the 21 inferred relationships involving `closeDb()` (e.g. with `admin-reads.test.ts` and `admin-session-migration.test.ts`) actually correct?**
  _`closeDb()` has 21 INFERRED edges - model-reasoned connections that need verification._
- **What connects `name`, `private`, `type` to the rest of the system?**
  _1191 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `seo.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.035011801730920535 - nodes in this community are weakly interconnected._
- **Why does `SITE` connect `site/site.ts` to `seo.ts`, `src/site.ts`, `queue.ts`, `db.ts`, `ReportPaper.tsx`, `local-state.ts`, `config.ts`, `icons.tsx`, `stories.ts`, `agent.tsx`, `publication/items.ts`, `publication/agent.ts`, `http-fetch.ts`, `beijingDate`, `root.tsx`, `routes/mcp.ts`, `topics.ts`, `compose.ts`, `auth.ts`, `panels.tsx`, `source.tsx`, `routes/site.ts`, `publication/feeds.ts`, `publication/reports.ts`, `ReadingGroup.tsx`, `eval-story-digests.ts`, `publish.ts`, `src/admin.ts`, `content-freshness.test.ts`, `react`, `media/og.ts`, `adminGet`, `media-performance.test.ts`, `models.tsx`, `sources.tsx`, `changelog.tsx`, `http-policy.ts`, `react-router`, `nameplates.ts`?**
  _High betweenness centrality (0.043) - this node is a cross-community bridge._
- **Should `src/site.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.04377370417193426 - nodes in this community are weakly interconnected._
- **Why does `react-router` connect `react-router` to `seo.ts`, `src/site.ts`, `ReportPaper.tsx`, `local-state.ts`, `icons.tsx`, `agent.tsx`, `beijingDate`, `root.tsx`, `hot.tsx`, `panels.tsx`, `source.tsx`, `site/site.ts`, `ReadingGroup.tsx`, `src/admin.ts`, `react`, `web/server.ts`, `adminGet`, `models.tsx`, `sources.tsx`, `web/package.json`, `changelog.tsx`, `web-server.ts`, `web-render-recovery.standalone.test.ts`?**
  _High betweenness centrality (0.029) - this node is a cross-community bridge._